import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Text } from "@chakra-ui/react";
import React from "react";
import theme from "~/theme";

interface AddNewModalProps {
    isOpen: boolean;
    onClose: () => void;
    headerTitle: string;
    children: React.ReactNode;
}

const AddNewModal: React.FC<AddNewModalProps> = ({ isOpen, onClose, headerTitle, children }) => {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader textStyle="preset1" color="grey.900">Add New {headerTitle}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    {children}
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}

export default AddNewModal;