import React, { useState } from "react";
import { Box, Button, Flex, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { CaretUp, CaretDown } from "phosphor-react";
import theme from "~/theme";

export interface DropdownMenuItem {
    itemLabel: string;
    value: string;
    onClick?: () => void;
}

interface DropdownMenuProps {
    label: string;
    colorTag?: string;
    fieldTitle?: string;
    items: DropdownMenuItem[];
    onChange?: (item: DropdownMenuItem) => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ label, items, colorTag, fieldTitle, onChange }) => {
    const [activeItem, setActiveItem] = useState<string>(label);

    const handleItemClick = (item: DropdownMenuItem) => {
        if (onChange) {
            onChange(item); // Call the onChange handler
        }
        setActiveItem(item.itemLabel);
        item.onClick?.(); // Perform the item's specific action
    };

    return (
        <Menu>
            {({ isOpen }) => (
                <>
                    <MenuButton
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
                        <Text
                            textStyle="preset4"
                            color="grey.900"
                            fontWeight="normal"
                        >
                            {activeItem}
                        </Text>
                    </MenuButton>
                    <MenuList
                        display="flex"
                        flexDirection="column"
                        gap={theme.spacing[150]}
                        padding={`${theme.spacing[150]} ${theme.spacing[250]}`}
                    >
                        {items.map((item: DropdownMenuItem, index: number) => (
                            <Box key={index}>
                                <MenuItem
                                    onClick={() => handleItemClick(item)}
                                    textStyle={activeItem === item.itemLabel ? "preset4bold" : "preset4"}
                                    pb={theme.spacing[150]}
                                    _hover={{
                                        bg: "white",
                                        textStyle: "preset4bold"
                                    }}
                                    _focus={{
                                        bg: "white"
                                    }}
                                >
                                    {item.itemLabel}
                                </MenuItem>
                                {index < items.length - 1 && <MenuDivider key={index} />}
                            </Box>
                        ))}
                    </MenuList>
                </>
            )}
        </Menu>
    )
}

export default DropdownMenu;