import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Text, Flex } from "@chakra-ui/react";
import React from "react";
import theme from "~/theme";
import CustomModalCloseButton from "./customModalCloseButton";

interface AddNewModalProps {
    isOpen: boolean;
    onClose: () => void;
    headerTitle: string;
    headerTag?: string;
    children: React.ReactNode;
}

const AddNewModal: React.FC<AddNewModalProps> = ({ isOpen, onClose, headerTitle, headerTag, children }) => {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            isCentered
        >
            <ModalOverlay />
            <ModalContent
                display="flex"
                maxW="35rem"
                padding={theme.spacing[400]}
                flexDirection="column"
                alignItems="flex-start"
                gap={theme.spacing[250]}
                alignSelf="stretch"
            >
                <Flex justify="space-between" width="100%" align="center">
                    <ModalHeader
                        flex="1"
                        padding={0}
                        textStyle="preset1"
                        fontSize="2rem"
                        color="grey.900"
                    >
                        {headerTitle}
                    </ModalHeader>
                    <CustomModalCloseButton onClose={onClose} />
                </Flex>
                <Text textStyle="preset4" color="grey.500">{headerTag}</Text>
                <ModalBody
                    display="flex"
                    flexDirection="column"
                    gap={theme.spacing[250]}
                    width="100%"
                    padding={0}
                >
                    {children}
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}

export default AddNewModal;