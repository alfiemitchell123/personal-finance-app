import { useState } from "react";

const useModal = <T,>() => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMode, setModalMode] = useState<"add" | "edit" | "delete">("add");
    const [selectedItem, setSelectedItem] = useState<string | undefined>(undefined);

    const openAddModal = () => {
        setModalMode("add");
        setSelectedItem(undefined);
        setIsModalOpen(true);
    }

    const openEditModal = (item: string) => {
        setModalMode("edit");
        setSelectedItem(item);
        setIsModalOpen(true);
    }

    const openDeleteModal = (item: string) => {
        setModalMode("delete");
        setSelectedItem(item);
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedItem(undefined);
    }

    return { isModalOpen, modalMode, selectedItem, openAddModal, openEditModal, openDeleteModal, closeModal };
}

export default useModal;