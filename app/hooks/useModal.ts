import { useState } from "react";

const useModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMode, setModalMode] = useState<"add" | "edit" | "delete">("add");
    const [selectedItem, setSelectedItem] = useState<string | undefined>(undefined);

    const openAddModal = () => {
        setModalMode("add");
        setSelectedItem(undefined);
        setIsModalOpen(true);
    }

    const openEditModal = (id: string) => {
        setModalMode("edit");
        setSelectedItem(id);
        setIsModalOpen(true);
    }

    const openDeleteModal = (id: string) => {
        setModalMode("delete");
        setSelectedItem(id);
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedItem(undefined);
    }

    return { isModalOpen, modalMode, selectedItem, openAddModal, openEditModal, openDeleteModal, closeModal };
}

export default useModal;