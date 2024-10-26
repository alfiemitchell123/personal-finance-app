import React, { useState, useEffect } from "react";
import { Button, Flex, useToast } from "@chakra-ui/react";
import AddNewModal from "../ui/addNewModal";
import useModal from "~/hooks/useModal";
import theme from "~/theme";
import InputField from "../ui/inputField";
import { collection, addDoc, doc, updateDoc, deleteDoc, getDocs, Timestamp } from "firebase/firestore";
import { db } from "~/firebase/firebase";
import DropdownMenu from "../ui/dropdownMenu";
import { categoryMenuItems, themeMenuItems } from "~/utils/menuItems";
import { Budget } from "~/types";
import useBudgetsData from "~/hooks/useBudgets";
import { useAuth } from "~/contexts/authContext/authProvider";
import { useNavigate } from "@remix-run/react";

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
    const [budgetColor, setBudgetColor] = useState("");
    const [totalSpent, setTotalSpent] = useState(0);
    const [totalRemaining, setTotalRemaining] = useState(0);

    const { budgets: existingBudgets, addBudget } = useBudgetsData();
    const { user } = useAuth();
    const toast = useToast();

    // Pre-fill form if in edit mode
    useEffect(() => {
        if (mode === "edit" && existingBudget) {
            setBudgetCategory(existingBudget.budgetCategory || "");
            setMaxSpend(existingBudget.maxSpend || 0);
            setBudgetColor(existingBudget.budgetColor || "");
            console.log("Editing mode: ", existingBudget);
        }
    }, [mode, existingBudget]);

    useEffect(() => {
        // Get the used categories from the existing budgets
        const usedCategories = existingBudgets.map(budget => budget.budgetCategory);
        const usedColors = existingBudgets.map(budget => budget.budgetColor);

        // Filter out used categories from allCategories
        const availableCategories = categoryMenuItems
            .map(item => item.value) // Extract the values (e.g., "Bills", "Dining Out", etc.)
            .filter(category => !usedCategories.includes(category));

        const availableColors = themeMenuItems
            .map(item => item.colorTag)
            .filter(color => !usedColors.includes(color));

        // Pre-select the first available category if there are any
        if (availableCategories.length > 0) {
            setBudgetCategory(availableCategories[0]);
        }

        if (availableColors.length > 0) {
            setBudgetColor(availableColors[0]);
        }
    }, [existingBudgets]); // Run whenever budgets change

    const handleSaveBudget = async () => {
        if (!budgetCategory || !maxSpend || !budgetColor) return;

        try {
            if (mode === "add") {
                // Add new budget to database
                const newBudget = {
                    budgetCategory: budgetCategory,
                    budgetColor: budgetColor,
                    maxSpend: Number(maxSpend),
                    totalSpent: totalSpent,
                    totalRemaining: maxSpend,
                    createdAt: Timestamp.now(),
                };
                await addBudget(newBudget);
                toast({
                    title: "Budget added successfully.",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                });
            } else if (mode === "edit" && budgetId) {
                // Update existing budget
                if (user) {
                    const budgetDocRef = doc(db, `users/${user.uid}/budgets`, budgetId);
                    await updateDoc(budgetDocRef, {
                        budgetCategory: budgetCategory,
                        budgetColor: budgetColor,
                        maxSpend: maxSpend,
                        totalRemaining: maxSpend,
                    });
                    toast({
                        title: "Budget edited successfully.",
                        status: "success",
                        duration: 3000,
                        isClosable: true,
                    });
                } else {
                    console.error("User is not authenticated.");
                }
            }

            // Reset form and close the modal
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
            if (user) {
                // Delete budget
                const budgetDocRef = doc(db, `users/${user.uid}/budgets`, budgetId);
                await deleteDoc(budgetDocRef);
                console.log("Budget deleted successfully");
                onClose();
                toast({
                    title: "Budget deleted successfully.",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                });
            } else {
                console.error("User is not authenticated.");
            }
        } else {
            console.error("Delete mode or budgetId is not valid");
        }
    };

    // Extract used colors and categories from existing budgets
    const usedColors = existingBudgets.map(budget => budget.budgetColor);
    const usedCategories = existingBudgets.map(budget => budget.budgetCategory);

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
                    <DropdownMenu
                        label="Entertainment"
                        items={categoryMenuItems}
                        fieldTitle="Budget Category"
                        onChange={(item) => setBudgetCategory(item.value || "")}
                        usedCategories={usedCategories}
                        value={budgetCategory}
                    />
                    <InputField
                        placeholder="e.g. 2000"
                        type="text"
                        isRequired={true}
                        label="Maximum Spend"
                        prefix="$"
                        onChange={(e) => setMaxSpend(parseFloat(e.target.value))}
                        value={maxSpend.toString()}
                    />
                    <DropdownMenu
                        label="Green"
                        items={themeMenuItems}
                        fieldTitle="Theme"
                        colorTag={theme.colors.secondary.green}
                        usedColors={usedColors}
                        usedCategories={usedCategories}
                        onChange={(item) => setBudgetColor(item.colorTag || "")}
                        value={budgetColor}
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