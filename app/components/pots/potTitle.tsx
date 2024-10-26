import React, { useEffect, useRef, useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { DotsThree } from "phosphor-react";
import theme from "~/theme";
import useModal from "~/hooks/useModal";
import EditDeleteDropdown from "../ui/editDeleteDropdown";
import PotModal from "./potModal";

interface PotTitleProps {
    fill: string;
    potName: string;
    onEdit: () => void;
    onDelete: () => void;
}

const PotTitle: React.FC<PotTitleProps> = ({ fill, potName, onEdit, onDelete }) => {
    const { isModalOpen, potModalMode, selectedItem, openEditPotModal, openDeletePotModal, closeModal } = useModal();

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
                <Text textStyle="preset2" color="grey.900">{potName}</Text>
            </Flex>

            <Box position="relative" ref={dropdownRef}>
                <DotsThree onMouseDown={toggleDropdown} cursor="pointer" />
                {dropdownIsOpen && (
                    <Box
                        width="120px"
                        position="absolute"
                        top="100%"
                        left="auto"
                        transform="translateX(-100%)"
                        zIndex={1}
                    >
                        <EditDeleteDropdown label="Pot" onEdit={onEdit} onDelete={onDelete} />
                    </Box>
                )}
            </Box>
            {isModalOpen && (
                <PotModal
                    mode={potModalMode}
                    isOpen={isModalOpen}
                    onClose={closeModal}
                />
            )}
        </Flex>
    )
}

export default PotTitle;