import React, { useState, useEffect } from "react";
import { Button, Checkbox, Flex, FormControl, useToast } from "@chakra-ui/react";
import AddNewModal from "../ui/addNewModal";
import theme from "~/theme";
import InputField from "../ui/inputField";
import { doc, updateDoc, deleteDoc, Timestamp } from "firebase/firestore";
import { db } from "~/firebase/firebase";
import DropdownMenu from "../ui/dropdownMenu";
import { categoryMenuItems, themeMenuItems } from "~/utils/menuItems";
import { useAuth } from "~/contexts/authContext/authProvider";
import useTransactionData from "~/hooks/useTransactions";
import PageLoading from "../ui/pageLoading";
import { Form } from "@remix-run/react";

interface TransactionModalProps {
    isOpen: boolean;
    onClose: () => void;
    mode: "add" | "edit" | "delete";
    transactionId?: string;
    existingTransaction?: {
        transactionName: string,
        transactionCategory: string,
        transactionAmt: number,
        recurringBill: boolean,
    };
}

const TransactionModal: React.FC<TransactionModalProps> = ({ isOpen, onClose, mode, transactionId, existingTransaction }) => {
    const [transactionName, setTransactionName] = useState("");
    const [transactionCategory, setTransactionCategory] = useState("");
    const [transactionAmt, setTransactionAmt] = useState(0);
    const [recurringBill, setRecurringBill] = useState(false);
    const [loadingTransactions, setLoadingTransactions] = useState(true);
    const [errors, setErrors] = useState({ transactionName: "", transactionAmt: "" });

    const { transactions: existingTransactions, addTransaction } = useTransactionData();
    const { user } = useAuth();
    const toast = useToast();

    const validateForm = () => {
        let valid = true;

        // Initialize newErrors with all required fields
        let newErrors = { transactionName: "", transactionAmt: "" };

        if (!transactionName || transactionName === "" || transactionName === "e.g. Property Management Inc") {
            newErrors.transactionName = "Transaction must have a name.";
            valid = false;
        }

        if (!transactionAmt || transactionAmt <= 0) {
            newErrors.transactionAmt = "Transaction amount must be greater than 0.";
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    // Pre-fill form if in edit mode
    useEffect(() => {
        if (mode === "edit" && existingTransaction) {
            setLoadingTransactions(true);
            setTransactionName(existingTransaction.transactionName || transactionName);
            setTransactionCategory(existingTransaction.transactionCategory || transactionCategory);
            setTransactionAmt(existingTransaction.transactionAmt || transactionAmt);
            setRecurringBill(existingTransaction.recurringBill || recurringBill);
            setLoadingTransactions(false);
        }
    }, [mode, existingTransaction]);

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRecurringBill(e.target.checked);
    };

    const handleSaveTransaction = async () => {
        if (!validateForm()) return;

        try {
            if (mode === "add") {
                // Add new transaction to database
                const newTransaction = {
                    transactionName: transactionName,
                    transactionCategory: transactionCategory,
                    transactionAmt: Number(transactionAmt),
                    recurringBill: recurringBill,
                    transactionDate: Timestamp.now(),
                };
                await addTransaction(newTransaction);
                toast({
                    title: "Transaction added successfully.",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                });
            } else if (mode === "edit" && transactionId) {
                // Update existing transaction
                if (user) {
                    const transactionDocRef = doc(db, `users/${user.uid}/transactions`, transactionId);
                    await updateDoc(transactionDocRef, {
                        transactionName: transactionName,
                        transactionCategory: transactionCategory,
                        transactionAmt: Number(transactionAmt),
                        recurringBill: recurringBill,
                    });
                    toast({
                        title: "Transaction edited successfully.",
                        status: "success",
                        duration: 3000,
                        isClosable: true,
                    });
                } else {
                    console.error("User is not authenticated.");
                }
            }

            // Reset form and close the modal
            setTransactionName("");
            setTransactionCategory("");
            setTransactionAmt(0);
            setRecurringBill(false);
            onClose();
        } catch (error) {
            console.log("Error adding transaction: ", error);
        }
    }

    const handleDeleteTransaction = async () => {
        if (mode === "delete" && transactionId) {
            if (user) {
                // Delete transaction
                const transactionDocRef = doc(db, `users/${user.uid}/transactions`, transactionId);
                await deleteDoc(transactionDocRef);
                onClose();
                toast({
                    title: "Transaction deleted successfully.",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                });
            } else {
                console.error("User is not authenticated.");
            }
        } else {
            console.error("Delete mode or transactionId is not valid");
        }
    };

    return (
        <AddNewModal
            isOpen={isOpen}
            onClose={onClose}
            headerTitle={mode === "add" ? "Add New Transaction" : mode === "edit" ? "Edit Transaction" : mode === "delete" ? "Delete Transaction" : ""}
            headerTag={mode === "add" ? "Enter a name for the transaction and pick a category. These categories can help you monitor income and expenses." : mode === "edit" ? "If you missed something or entered an amount incorrectly, edit it and save changes." : mode === "delete" ? "Are you sure you want to delete this transaction? This action cannot be reversed, and all the data inside it will be removed forever." : ""}
        >
            {(mode === "add" || mode === "edit") && (
                <Form>
                    <Flex
                        direction="column"
                        align="flex-start"
                        gap={theme.spacing[200]}
                    >
                        <FormControl isInvalid={!!errors.transactionName}>
                            <InputField
                                label="Transaction Name"
                                placeholder="e.g. Property Management Inc"
                                type="text"
                                isRequired={true}
                                onChange={(e) => setTransactionName(e.target.value)}
                                value={transactionName}
                                helperText={errors.transactionName}
                            />
                        </FormControl>
                        <DropdownMenu
                            label="Bills"
                            items={categoryMenuItems}
                            fieldTitle="Transaction Category"
                            onChange={(item) => setTransactionCategory(item.value || "")}
                            value={transactionCategory}
                        />
                        <FormControl isInvalid={!!errors.transactionAmt}>
                            <InputField
                                placeholder="e.g. 2000"
                                type="number"
                                isRequired={true}
                                label="Transaction Amount"
                                prefix="$"
                                onChange={(e) => setTransactionAmt(parseFloat(e.target.value))}
                                value={transactionAmt}
                                helperText={errors.transactionAmt}
                            />
                        </FormControl>
                        <Checkbox
                            variant="outline"
                            type="checkbox"
                            onChange={handleCheckboxChange}
                            isChecked={recurringBill}
                            iconColor="white"
                            colorScheme="grey"
                            sx={{
                                ".chakra-checkbox__label": {
                                    color: "grey.500",
                                    textStyle: "preset5bold",
                                }
                            }}
                        >
                            Recurring Bill
                        </Checkbox>
                    </Flex>
                </Form>
            )}
            <Button
                variant="primary"
                width="100%"
                height="100%"
                padding={theme.spacing[200]}
                justifyContent="center"
                alignItems="center"
                gap={theme.spacing[200]}
                flex="1 0 0"
                borderRadius={theme.spacing[100]}
                textStyle="preset4bold"
                fontSize=" 0.875rem"
                onClick={() => {
                    if (mode === "add" || mode === "edit") {
                        handleSaveTransaction();
                    } else if (mode === "delete") {
                        handleDeleteTransaction();
                    }
                }}
                bg={mode === "add" || mode === "edit" ? "grey.900" : "secondary.red"}
            >
                {mode === "add" ? "Add Transaction" : mode === "edit" ? "Save Changes" : mode === "delete" ? "Yes, Confirm Deletion" : ""}
            </Button>

            {mode === "delete" && (
                <Button
                    onClick={onClose}
                    justifyContent="center"
                    alignItems="center"
                    gap={theme.spacing[150]}
                    variant="tertiary"
                    textStyle="preset4"
                    fontSize="0.875rem"
                    color="grey.500"
                    _hover={{
                        color: "grey.900",
                    }}
                >
                    No, Go Back
                </Button>
            )}
        </AddNewModal>
    );
}

export default TransactionModal;