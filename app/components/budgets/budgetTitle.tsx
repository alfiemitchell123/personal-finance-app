import React, { useEffect, useState, useRef } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { DotsThree } from "phosphor-react";
import EditDeleteDropdown from "../ui/editDeleteDropdown";
import BudgetModal from "./budgetModal";
import useModal from "~/hooks/useModal";
import theme from "~/theme";
import useBudgetsData from "~/hooks/useBudgets";

interface BudgetTitleProps {
    fill: string;
    budgetCategory: string;
    onEdit: () => void;
    onDelete: () => void;
}

const BudgetTitle: React.FC<BudgetTitleProps> = ({ fill, budgetCategory, onEdit, onDelete }) => {
    const { isModalOpen, modalMode, selectedItem, openEditModal, openDeleteModal, closeModal } = useModal();

    const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = (event: React.MouseEvent) => {
        event.preventDefault();
        setDropdownIsOpen(!dropdownIsOpen);
    }

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setDropdownIsOpen(false);
        }
    }

    useEffect(() => {
        if (dropdownIsOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownIsOpen]);

    return (
        <Flex
            justify="space-between"
            align="center"
            alignSelf="stretch"
            width="100%"
        >
            <Flex
                width="19.75rem"
                align="center"
                gap={theme.spacing[200]}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="8" fill={fill} />
                </svg>
                <Text textStyle="preset2" color="grey.900">{budgetCategory}</Text>
            </Flex>

            <Box position="relative" ref={dropdownRef}>
                <DotsThree onMouseDown={toggleDropdown} cursor="pointer" />
                {dropdownIsOpen && (
                    <Box
                        width="140px"
                        position="absolute"
                        top="100%"
                        left="auto"
                        transform="translateX(-100%)"
                        zIndex={1}
                    >
                        <EditDeleteDropdown label="Budget" onEdit={onEdit} onDelete={onDelete} />
                    </Box>
                )}
            </Box>
            {isModalOpen && (
                <BudgetModal
                    mode={modalMode}
                    isOpen={isModalOpen}
                    onClose={closeModal}
                />
            )}
        </Flex>
    )
}

export default BudgetTitle;