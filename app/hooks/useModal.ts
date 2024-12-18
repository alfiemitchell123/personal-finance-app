import { useState } from "react";

const useModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [budgetModalMode, setBudgetModalMode] = useState<"add" | "edit" | "delete">("add");
    const [potModalMode, setPotModalMode] = useState<"addNew" | "edit" | "delete" | "withdraw" | "addMoney">("addNew");
    const [transactionModalMode, setTransactionModalMode] = useState<"add" | "edit" | "delete">("add");
    const [selectedItem, setSelectedItem] = useState<string | undefined>(undefined);

    // Budget modals

    const openAddBudgetModal = () => {
        setBudgetModalMode("add");
        setSelectedItem(undefined);
        setIsModalOpen(true);
    }

    const openEditBudgetModal = (id: string) => {
        setBudgetModalMode("edit");
        setSelectedItem(id);
        setIsModalOpen(true);
    }

    const openDeleteBudgetModal = (id: string) => {
        setBudgetModalMode("delete");
        setSelectedItem(id);
        setIsModalOpen(true);
    }

    // Pot modals

    const openAddPotModal = () => {
        setPotModalMode("addNew");
        setSelectedItem(undefined);
        setIsModalOpen(true);
    }

    const openEditPotModal = (id: string) => {
        setPotModalMode("edit");
        setSelectedItem(id);
        setIsModalOpen(true);
    }

    const openDeletePotModal = (id: string) => {
        setPotModalMode("delete");
        setSelectedItem(id);
        setIsModalOpen(true);
    }

    const openWithdrawPotModal = (id: string) => {
        setPotModalMode("withdraw");
        setSelectedItem(id);
        setIsModalOpen(true);
    }

    const openAddMoneyPotModal = (id: string) => {
        setPotModalMode("addMoney");
        setSelectedItem(id);
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedItem(undefined);
    }

    // Transaction modals
    const openAddTransactionModal = () => {
        setTransactionModalMode("add");
        setSelectedItem(undefined);
        setIsModalOpen(true);
    }

    const openEditTransactionModal = (id: string) => {
        setTransactionModalMode("edit");
        setSelectedItem(id);
        setIsModalOpen(true);
    }

    const openDeleteTransactionModal = (id: string) => {
        setTransactionModalMode("delete");
        setSelectedItem(id);
        setIsModalOpen(true);
    }

    return {
        isModalOpen,
        budgetModalMode,
        potModalMode,
        transactionModalMode,
        selectedItem,
        closeModal,
        // Budgets
        openAddBudgetModal,
        openEditBudgetModal,
        openDeleteBudgetModal,
        // Pots
        openAddPotModal,
        openEditPotModal,
        openDeletePotModal,
        openWithdrawPotModal,
        openAddMoneyPotModal,
        // Transactions
        openAddTransactionModal,
        openEditTransactionModal,
        openDeleteTransactionModal,
    };
}

export default useModal;