import React from "react";
import { Divider, Flex, Text } from "@chakra-ui/react";
import useModal from "~/hooks/useModal";
import theme from "~/theme";

interface EditDeleteDropdownProps {
    label: string;
    onEdit: () => void;
    onDelete: () => void;
}

const EditDeleteDropdown: React.FC<EditDeleteDropdownProps> = ({ label, onEdit, onDelete }) => {
    return (
        <Flex
            display="inline-flex"
            maxH="18.75rem"
            padding={`${theme.spacing[150]} ${theme.spacing[250]}`}
            direction="column"
            align="flex-start"
            gap={theme.spacing[150]}
            borderRadius={theme.spacing[100]}
            bg="white"
            boxShadow="0px 4px 24px 0px rgba(0, 0, 0, 0.25)"
        >
            <Flex onClick={onEdit} align="center" gap={theme.spacing[200]} cursor="pointer">
                <Text textStyle="preset4" color="grey.900">Edit {label}</Text>
            </Flex>

            <Divider height="0.0625rem" stroke="1px" />

            <Flex onClick={onDelete} align="center" gap={theme.spacing[200]} cursor="pointer">
                <Text textStyle="preset4" color="secondary.red">Delete {label}</Text>
            </Flex>
        </Flex>
    )
}

export default EditDeleteDropdown;