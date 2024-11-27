import React, { useEffect, useState } from "react";
import { Box, Button, Flex, InputLeftElement, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text, useBreakpointValue } from "@chakra-ui/react";
import { CaretUp, CaretDown } from "phosphor-react";
import theme from "~/theme";

export interface DropdownMenuItem {
    itemLabel: string;
    colorTag?: string;
    value?: string;
    onClick?: () => void;
}

interface DropdownMenuProps {
    label: string;
    colorTag?: string;
    fieldTitle?: string;
    usedColors?: string[];
    usedCategories?: string[];
    items: DropdownMenuItem[];
    value?: string;
    onChange?: (item: DropdownMenuItem) => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ label, items, colorTag, fieldTitle, usedColors = [], usedCategories = [], value, onChange }) => {
    const [activeItem, setActiveItem] = useState<string>(label);
    const [activeColorTag, setActiveColorTag] = useState<string | undefined>(colorTag);

    useEffect(() => {
        setActiveItem(label);
        setActiveColorTag(colorTag);
    }, [label, colorTag]);

    useEffect(() => {
        if (value) {
            const selectedItem = items.find(item => item.colorTag === value || item.itemLabel === value);
            if (selectedItem) {
                // Set active item and color tag even if the item is used
                setActiveItem(selectedItem.itemLabel);
                setActiveColorTag(selectedItem.colorTag);
            }
        }
    }, [value, items]);

    const handleItemClick = (item: DropdownMenuItem) => {
        if (onChange) {
            onChange(item); // Call the onChange handler
        }
        setActiveItem(item.itemLabel);
        setActiveColorTag(item.colorTag);
        item.onClick?.(); // Perform the item's specific action
    };

    return (
        <Flex direction="column" width="100%" gap={fieldTitle ? "0.5rem" : "0rem"}>
            <Text textStyle="preset5bold" color="grey.500">{fieldTitle}</Text>
            <Menu>
                {({ isOpen }) => (
                    <>
                        <MenuButton
                            width="100%"
                            as={Button}
                            bg="white"
                            borderRadius={theme.spacing[100]}
                            border="1px solid"
                            borderColor="beige.500"
                            rightIcon={isOpen ? <CaretUp weight="fill" /> : <CaretDown weight="fill" />}
                            _hover={{
                                bg: "grey.100"
                            }}
                            _active={{
                                bg: "grey.100"
                            }}
                        >
                            <Flex align="center" gap={theme.spacing[150]}>
                                {activeColorTag && (
                                    <svg width="16" height="16">
                                        <circle cx="8" cy="8" r="8" fill={activeColorTag} />
                                    </svg>
                                )}
                                <Text
                                    textStyle="preset4"
                                    color="grey.900"
                                    fontWeight="normal"
                                >
                                    {activeItem}
                                </Text>
                            </Flex>
                        </MenuButton>
                        <MenuList
                            width="100%"
                            maxW="31rem"
                            maxH="18.75rem"
                            overflowY="auto"
                            display="flex"
                            flexDirection="column"
                            gap={theme.spacing[150]}
                            padding={`${theme.spacing[150]} ${theme.spacing[250]}`}
                        >
                            {items.map((item: DropdownMenuItem, index: number) => {
                                const isCategoryUsed = usedCategories.includes(item.itemLabel);
                                const isColorUsed = usedColors.includes(item.colorTag || "");
                                const isUsed = isColorUsed || isCategoryUsed;

                                return (
                                    <Box key={index}>
                                        <MenuItem
                                            onClick={() => !isUsed && handleItemClick(item)}
                                            isDisabled={isUsed}
                                            textStyle={activeItem === item.itemLabel ? "preset4bold" : "preset4"}
                                            pb={theme.spacing[150]}
                                            _hover={{
                                                bg: "white",
                                                textStyle: isUsed ? "preset4" : "preset4bold",
                                                cursor: isUsed ? "not-allowed" : "pointer"
                                            }}
                                            _focus={{
                                                bg: isUsed ? "grey.100" : "white"
                                            }}
                                        >
                                            <Flex align="center" justify="space-between" width="100%">
                                                <Flex align="center">
                                                    {item.colorTag && (
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 16 17" fill="none" style={{ marginRight: theme.spacing[100] }}>
                                                            <circle cx="8" cy="8.5" r="8" fill={item.colorTag} />
                                                        </svg>
                                                    )}
                                                    {item.itemLabel}
                                                </Flex>
                                                {isUsed && <Text textStyle="preset5" color="grey.500" textAlign="right">Already used</Text>}
                                            </Flex>
                                        </MenuItem>
                                        {index < items.length - 1 && <MenuDivider key={index} />}
                                    </Box>
                                )
                            })}
                        </MenuList>
                    </>
                )
                }
            </Menu>
        </Flex>
    )
}

export default DropdownMenu;