import React, { useEffect, useState } from "react";
import AddNewModal from "../ui/addNewModal";
import usePotsData from "~/hooks/usePots";
import { Button, calc, Flex, useToast } from "@chakra-ui/react";
import { deleteDoc, doc, getDoc, Timestamp, updateDoc } from "firebase/firestore";
import { useAuth } from "~/contexts/authContext/authProvider";
import { db } from "~/firebase/firebase";
import DropdownMenu from "../ui/dropdownMenu";
import InputField from "../ui/inputField";
import theme from "~/theme";
import { themeMenuItems } from "~/utils/menuItems";
import PotChartForModal from "./potChartForModal";
import PageLoading from "../ui/pageLoading";

interface PotModalProps {
    isOpen: boolean;
    onClose: () => void;
    mode: "edit" | "delete" | "addNew" | "withdraw" | "addMoney";
    potId?: string;
    existingPot?: { potName: string, targetAmt: number, potColor: string, totalSaved: number };
}

const PotModal: React.FC<PotModalProps> = ({ isOpen, onClose, mode, potId, existingPot }) => {
    const [potName, setPotName] = useState("");
    const [targetAmt, setTargetAmt] = useState(0);
    const [potColor, setPotColor] = useState("");
    const [totalSaved, setTotalSaved] = useState(existingPot?.totalSaved || 0);
    const [withdrawAddAmt, setWithdrawAddAmt] = useState<string>("0");
    const [percentage, setPercentage] = useState(0);
    const [savedAmtBarWidth, setSavedAmtBarWidth] = useState(0);
    const [addOrWithdrawAmtBarWidth, setAddOrWithdrawAmtBarWidth] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const { pots: existingPots, addPot } = usePotsData();
    const { user } = useAuth();
    const toast = useToast();

    const maxChars = 30;

    // Pre-fill form if in edit mode
    useEffect(() => {
        if (mode === "edit" && existingPot) {
            setPotName(existingPot.potName || "");
            setTargetAmt(Number(existingPot.targetAmt) || 0);
            setPotColor(existingPot.potColor || "");
            console.log("Editing mode with data: ", existingPot);
        }
    }, [mode, existingPot]);

    // Logic for adding/editing pots
    const handleSavePot = async () => {
        if (!potName || !targetAmt || !potColor) return;
        try {
            if (mode === "addNew") {
                // Add new pot to database
                const newPot = {
                    potName: potName,
                    targetAmt: Number(targetAmt),
                    potColor: potColor,
                    totalSaved: totalSaved,
                    createdAt: Timestamp.now(),
                };
                await addPot(newPot);
                toast({
                    title: "Pot added successfully.",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                });
            } else if (mode === "edit" && potId) {
                // Update existing pot
                if (user) {
                    const potDocRef = doc(db, `users/${user.uid}/pots`, potId);
                    await updateDoc(potDocRef, {
                        potName: potName,
                        targetAmt: Number(targetAmt),
                        potColor: potColor,
                        totalSaved: totalSaved,
                    });
                    toast({
                        title: "Pot edited successfully.",
                        status: "success",
                        duration: 3000,
                        isClosable: true,
                    });
                } else {
                    console.error("User is not authenticated.");
                }
            }

            // Reset form and close the modal
            setPotName("");
            setTargetAmt(0);
            setPotColor("");
            setTotalSaved(0);
            onClose();
        } catch (error) {
            console.log("Error adding pot: ", error);
        }
    }

    // Logic for deleting pots
    const handleDeletePot = async () => {
        console.log("handleDeletePot called, mode:", mode, "potId:", potId);
        if (mode === "delete" && potId) {
            if (user) {
                // Delete pot
                const potDocRef = doc(db, `users/${user.uid}/pots`, potId);
                await deleteDoc(potDocRef);
                console.log("Pot deleted successfully");
                onClose();
                toast({
                    title: "Pot deleted successfully.",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                });
            } else {
                console.error("User is not authenticated.");
            }
        } else {
            console.error("Delete mode or potId is not valid");
        }
    };

    // Logic for adding money to pots
    const handleAddMoneyToPot = async () => {
        if (mode === "addMoney" && potId) {
            if (user) {
                const amountToAdd = parseFloat(withdrawAddAmt);
                if (!isNaN(amountToAdd)) {
                    // Add money to pot
                    const potDocRef = doc(db, `users/${user.uid}/pots`, potId);
                    const potDoc = await getDoc(potDocRef);
                    if (amountToAdd >= 0 && potDoc.exists()) {
                        const currentTotalSaved = potDoc.data().totalSaved;
                        const targetAmt = potDoc.data().targetAmt;

                        const newTotalSaved = currentTotalSaved + amountToAdd;
                        await updateDoc(potDocRef, { totalSaved: newTotalSaved });
                        setTotalSaved(newTotalSaved);
                        onClose();

                        if (newTotalSaved >= targetAmt) {
                            toast({
                                title: "Congratulations! You've met your target.",
                                description: `Your pot has reached or exceeded the target amount of $${targetAmt}.`,
                                status: "success",
                                duration: 3000,
                                isClosable: true,
                            });
                        }
                    }
                }
            } else {
                console.error("User is not authenticated.");
            }
        }
    };

    // Logic for withdrawing money from pots
    const handleWithdrawFromPot = async () => {
        if (mode === "withdraw" && potId) {
            if (user) {
                const amountToAdd = parseFloat(withdrawAddAmt);
                if (!isNaN(amountToAdd)) {
                    // Add money to pot
                    const potDocRef = doc(db, `users/${user.uid}/pots`, potId);
                    const potDoc = await getDoc(potDocRef);
                    if (amountToAdd >= 0 && potDoc.exists()) {
                        const currentTotalSaved = potDoc.data().totalSaved;

                        if (currentTotalSaved - amountToAdd >= 0) {
                            await updateDoc(potDocRef, {
                                totalSaved: currentTotalSaved - amountToAdd
                            });
                            setTotalSaved(currentTotalSaved - amountToAdd);
                            onClose();
                        } else {
                            toast({
                                title: "Insufficient Funds",
                                description: `You only have $${currentTotalSaved} available.`,
                                status: "error",
                                duration: 3000,
                                isClosable: true,
                            });
                        }
                    }
                } else {
                    console.error("User is not authenticated.");
                }
            }
        }
    }

    // Logic for fetching the target amount from Firestore, to be used in other functions
    const fetchTargetAmt = async () => {
        if (potId && user) {
            const potDocRef = doc(db, `users/${user.uid}/pots`, potId);
            const potDoc = await getDoc(potDocRef);
            if (potDoc.exists()) {
                const potData = potDoc.data();
                setTargetAmt(potData.targetAmt); // Update state with the target amount
            } else {
                console.error("Pot document does not exist.");
            }
        }
    };
    useEffect(() => {
        fetchTargetAmt(); // Fetch target amount whenever potId changes
    }, [potId, user]);

    // Logic for calculating the width of the saved amount bar in addMoney/withdraw modals
    const calculateSavedAmtBarWidth = async () => {
        setIsLoading(true);
        try {
            if ((mode === "withdraw" || mode === "addMoney") && potId) {
                if (user) {
                    const potDocRef = doc(db, `users/${user.uid}/pots`, potId);
                    const potDoc = await getDoc(potDocRef);
                    if (potDoc.exists()) {
                        const currentTotalSaved = potDoc.data().totalSaved;
                        const currentTargetAmt = potDoc.data().targetAmt;
                        if (currentTargetAmt && currentTotalSaved) {
                            const barWidth = (currentTotalSaved / currentTargetAmt) * 100;
                            setSavedAmtBarWidth(barWidth);
                            return;
                        }
                    } else {
                        console.error("Pot document does not exist.");
                    }
                } else {
                    console.error("User is not authenticated.");
                }
            }
        } catch (error) {
            console.error("Error calculating saved amount bar width:", error);
        } finally {
            setIsLoading(false);
        }
        setSavedAmtBarWidth(0);
    };
    useEffect(() => {
        calculateSavedAmtBarWidth();
    }, [mode, user, potId]);

    // Logic for calculating the width of the add/withdraw amount bar in addMoney/withdraw modals
    const calculateAddOrWithdrawBarWidth = () => {
        const maxWidth = 100;

        const amount = Number(withdrawAddAmt);
        const target = Number(targetAmt);

        const widthPercentage = target > 0 ? (amount / target) * maxWidth : 0;
        const availableWidth = maxWidth - savedAmtBarWidth;

        const barWidth = Math.min(widthPercentage, availableWidth);
        setAddOrWithdrawAmtBarWidth(barWidth);
    }
    useEffect(() => {
        calculateAddOrWithdrawBarWidth();
    }, [withdrawAddAmt, targetAmt]);

    // Logic for calculating the percentage in the addMoney/withdraw modals
    const calculatePercentage = () => {
        const amount = Number(withdrawAddAmt);
        const existingAmt = existingPot?.totalSaved ?? 0;
        const target = Number(targetAmt);

        if (target > 0) {
            const total = existingAmt + amount;
            const percentage = (total / target) * 100;
            setPercentage(percentage)
            return;
        }

        return 0;
    }
    useEffect(() => {
        calculatePercentage();
    }, [withdrawAddAmt, targetAmt]);

    // Handle input change for add/withdraw input field
    const handleAddWithdrawInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setWithdrawAddAmt(e.target.value);
    };

    // Extract used colors and categories from existing budgets
    const usedColors = existingPots.map(pot => pot.potColor);
    const usedNames = existingPots.map(pot => pot.potName); // Fix this later

    return (
        <AddNewModal
            isOpen={isOpen}
            onClose={onClose}
            headerTitle={mode === "addNew" ? "Add New Pot" : mode === "edit" ? "Edit Pot" : mode === "delete" ? "Delete Pot" : mode === "withdraw" ? `Withdraw from ‘${existingPot?.potName}’` : mode === "addMoney" ? `Add to ‘${existingPot?.potName}’` : ""}
            headerTag={mode === "addNew" ? "Create a pot to set savings targets. These can help keep you on track as you save for special purchases." : mode === "edit" ? "If your saving targets change, feel free to update your pots." : mode === "delete" ? "Are you sure you want to delete this pot? This action cannot be reversed, and all the data inside it will be removed forever." : mode === "withdraw" ? "Enter the amount to withdraw back into your checking account." : mode === "addMoney" ? "Enter amount to add to your savings." : ""}
        >
            {isLoading ? (
                <Flex
                    width="100%"
                    align="center"
                    justify="center"
                >
                    <PageLoading />
                </Flex>
            ) : (
                <>
                    {(mode === "addNew" || mode === "edit") && (
                        <Flex
                            direction="column"
                            align="flex-start"
                            gap={theme.spacing[200]}
                        >
                            <InputField
                                id="potName"
                                label="Pot Name"
                                type="text"
                                placeholder="e.g. Rainy Days"
                                helperText={`${maxChars - potName.length} characters left`}
                                onChange={(e) => setPotName(e.target.value)}
                                value={potName || ""}
                                isRequired={true}
                                maxLength={30}
                            />
                            <InputField
                                placeholder="e.g. 2000"
                                type="number"
                                isRequired={true}
                                label="Target"
                                prefix="$"
                                onChange={(e) => setTargetAmt(parseFloat(e.target.value) || 0)}
                                value={targetAmt ? targetAmt.toString() : ""}
                                usedNames={usedNames}
                            />
                            <DropdownMenu
                                label="Green"
                                items={themeMenuItems}
                                fieldTitle="Theme"
                                colorTag={theme.colors.secondary.green}
                                usedColors={usedColors}
                                onChange={(item) => setPotColor(item.colorTag || "")}
                                value={potColor}
                            />
                        </Flex>
                    )}

                    {(mode === "withdraw" || mode === "addMoney") && (
                        <Flex
                            direction="column"
                            align="flex-start"
                            gap={theme.spacing[250]}
                        >
                            <PotChartForModal
                                targetAmt={existingPot?.targetAmt}
                                newAmount={withdrawAddAmt ? parseFloat(withdrawAddAmt) : 0}
                                percentage={addOrWithdrawAmtBarWidth}
                                barColor={mode === "withdraw" ? theme.colors.secondary.red : mode === "addMoney" ? theme.colors.secondary.green : ""}
                                savedAmtBarWidth={savedAmtBarWidth}
                                addOrWithdrawAmtBarWidth={addOrWithdrawAmtBarWidth}
                            />
                            <InputField
                                label={mode === "withdraw" ? "Amount to Withdraw" : mode === "addMoney" ? "Amount to Add" : ""}
                                type="number"
                                prefix="$"
                                isRequired={true}
                                onChange={handleAddWithdrawInputChange}
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
                            if (mode === "addNew" || mode === "edit") {
                                handleSavePot();
                            } else if (mode === "delete") {
                                handleDeletePot();
                            } else if (mode === "withdraw") {
                                handleWithdrawFromPot();
                            } else if (mode === "addMoney") {
                                handleAddMoneyToPot();
                            }
                        }}
                        bg={(mode === "addNew" || mode === "edit" || mode === "withdraw" || mode === "addMoney") ? "grey.900" : "secondary.red"}
                    >
                        {mode === "addNew" ? "Add Pot" : mode === "edit" ? "Save Changes" : mode === "delete" ? "Yes, Confirm Deletion" : mode === "withdraw" ? "Confirm Withdrawal" : mode === "addMoney" ? "Confirm Addition" : ""}
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
                </>
            )}
        </AddNewModal>
    )
}

export default PotModal;