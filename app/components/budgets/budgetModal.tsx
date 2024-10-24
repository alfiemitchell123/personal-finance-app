import React, { useState, useEffect } from "react";
import { Button, Flex, useToast } from "@chakra-ui/react";
import AddNewModal from "../ui/addNewModal";
import useModal from "~/hooks/useModal";
import theme from "~/theme";
import InputField from "../ui/inputField";
import { collection, addDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "~/firebase/firebase";

interface BudgetModalProps {
    isOpen: boolean;
    onClose: () => void;
    mode: "add" | "edit" | "delete";
    budgetId?: string;
    existingBudget?: { budgetCategory: string, maxSpend: number, budgetColor: string };
}

const BudgetModal: React.FC<BudgetModalProps> = ({ isOpen, onClose, mode, budgetId, existingBudget }) => {
    const [budgetCategory, setBudgetCategory] = useState("");
    const [maxSpend, setMaxSpend] = useState(0);
    const [budgetColor, setBudgetColor] = useState("#277C78");
    const [totalSpent, setTotalSpent] = useState(0);
    const [totalRemaining, setTotalRemaining] = useState(0);

    const toast = useToast();

    // Pre-fill form if in edit mode
    useEffect(() => {
        if (mode === "edit" && existingBudget) {
            setBudgetCategory(existingBudget.budgetCategory);
            setMaxSpend(existingBudget.maxSpend);
            setBudgetColor(existingBudget.budgetColor);
        }
    }, [mode, existingBudget]);

    const handleSaveBudget = async () => {
        if (!budgetCategory || !maxSpend || !budgetColor) return;

        try {
            if (mode === "add") {
                // Add new budget to database
                const budgetCollection = collection(db, 'budgets');
                await addDoc(budgetCollection, {
                    budgetCategory: budgetCategory,
                    budgetColor: budgetColor,
                    maxSpend: maxSpend,
                    totalSpent: totalSpent,
                    totalRemaining: maxSpend,
                    createdAt: new Date(),
                });
                onClose();
                toast({
                    title: "Budget added successfully.",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                });
            } else if (mode === "edit" && budgetId) {
                // Update existing budget
                const budgetDocRef = doc(db, "budgets", budgetId);
                await updateDoc(budgetDocRef, {
                    budgetCategory: budgetCategory,
                    budgetColor: budgetColor,
                    maxSpend: maxSpend,
                });
                onClose();
                toast({
                    title: "Budget edited successfully.",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                });
            }

            setBudgetCategory("");
            setMaxSpend(0);
            setBudgetColor("");
            setTotalSpent(0);
            setTotalRemaining(maxSpend);
            onClose();
        } catch (error) {
            console.log("Error adding budget: ", error);
        }
    }

    const handleDeleteBudget = async () => {
        console.log("handleDeleteBudget called, mode:", mode, "budgetId:", budgetId);
        if (mode === "delete" && budgetId) {
            try {
                // Delete budget
                const budgetDocRef = doc(db, "budgets", budgetId);
                await deleteDoc(budgetDocRef);
                console.log("Budget deleted successfully");
                onClose();
                toast({
                    title: "Budget deleted successfully.",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                });
            } catch (error) {
                console.error("Error deleting budget: ", error);
            }
        } else {
            console.error("Delete mode or budgetId is not valid");
        }
    };

    return (
        <AddNewModal
            isOpen={isOpen}
            onClose={onClose}
            headerTitle={mode === "add" ? "Add New Budget" : mode === "edit" ? "Edit Budget" : mode === "delete" ? "Delete Budget" : ""}
            headerTag={mode === "add" ? "Choose a category to set a spending budget. These categories can help you monitor spending." : mode === "edit" ? "As your budgets change, feel free to update your spending limits." : mode === "delete" ? "Are you sure you want to delete this budget? This action cannot be reversed, and all the data inside it will be removed forever." : ""}
        >
            {(mode === "add" || mode === "edit") && (
                <Flex
                    direction="column"
                    align="flex-start"
                    gap={theme.spacing[200]}
                >
                    <InputField
                        placeholder="Entertainment"
                        id="search"
                        type="text"
                        isRequired={true}
                        label="Budget Category"
                        onChange={(e) => setBudgetCategory(e.target.value)}
                    />
                    <InputField
                        placeholder="e.g. 2000"
                        id="search"
                        type="text"
                        isRequired={true}
                        label="Maximum Spend"
                        prefix="$"
                        onChange={(e) => setMaxSpend(parseFloat(e.target.value))}
                    />
                    <InputField
                        placeholder="e.g. 2000"
                        id="search"
                        type="text"
                        isRequired={true}
                        label="Maximum Spend"
                        colorTag={theme.colors.secondary.green}
                        onChange={(e) => setBudgetColor(e.target.value)}
                    />
                </Flex>
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
                    console.log("Button clicked, mode:", mode);
                    if (mode === "add" || mode === "edit") {
                        handleSaveBudget();
                    } else if (mode === "delete") {
                        handleDeleteBudget();
                    }
                }}
                bg={mode === "add" || mode === "edit" ? "grey.900" : "secondary.red"}
            >
                {mode === "add" ? "Add Budget" : mode === "edit" ? "Save Changes" : mode === "delete" ? "Yes, Confirm Deletion" : ""}
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

export default BudgetModal;