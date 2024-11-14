import React, { useState, SVGProps, useEffect } from "react";
import { Flex, Input, InputGroup, InputLeftElement, InputRightElement, Text, FormControl, FormLabel, FormHelperText } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { IconWeight } from "phosphor-react";
import theme from "~/theme";
import { s } from "node_modules/vite/dist/node/types.d-aGj9QkWt";

interface InputFieldProps {
    label?: string;
    helperText?: string;
    icon?: React.ComponentType<SVGProps<SVGSVGElement> & { weight?: IconWeight }>;
    size?: number;
    prefix?: string;
    colorTag?: string;
    id?: string;
    type: string;
    placeholder?: string;
    isRequired: boolean;
    autoComplete?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onIconClick?: () => void;
    iconWeight?: IconWeight;
    value?: string | number | boolean;
    usedNames?: string[];
    maxLength?: number;
}

const InputField: React.FC<InputFieldProps> = ({
    label,
    helperText,
    icon: Icon,
    size = 16,
    prefix,
    colorTag,
    id,
    type,
    placeholder,
    isRequired,
    autoComplete,
    onChange,
    onIconClick,
    iconWeight = 'fill',
    value,
    usedNames = [],
    maxLength,
    ...props
}) => {
    const [inputValue, setInputValue] = useState<string>("");

    useEffect(() => {
        if (value !== undefined) {
            setInputValue(value.toString()); // Sync local state with prop
        }
    }, [value]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setInputValue(value); // Update local state
        if (onChange) {
            onChange(event); // Call the provided onChange function with the event
        }
    };

    return (
        <FormControl
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            // gap={theme.spacing[50]}
            id={id}
            isRequired={isRequired}
        >
            {label &&
                <FormLabel
                    fontSize={theme.textStyles.preset5bold.fontSize}
                    fontWeight={theme.textStyles.preset5bold.fontWeight}
                    color="grey.500"
                    htmlFor={id}
                    requiredIndicator={false}
                >
                    {label}
                </FormLabel>}
            <InputGroup>
                {colorTag &&
                    <InputLeftElement ml="4px" mr={prefix ? theme.spacing[150] : 0} pointerEvents="none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 16 17" fill="none">
                            <circle cx="8" cy="8.5" r="8" fill={colorTag} />
                        </svg>
                    </InputLeftElement>
                }
                {prefix &&
                    <InputLeftElement pl="0.5rem" pointerEvents="none">
                        <Text textStyle="preset4" color="beige.500">{prefix}</Text>
                    </InputLeftElement>
                }
                <Input
                    maxLength={maxLength}
                    sx={{
                        display: "flex",
                        padding: `${theme.spacing[150]} ${theme.spacing[250]}`,
                        alignItems: "center",
                        gap: `${theme.spacing[200]}`,
                        borderRadius: `${theme.spacing[100]}`,
                        border: "1px solid #98908B",
                        bg: "white",
                        flex: "1 0 0",
                        outline: "none",
                        fontSize: "0.875rem",
                        pl: prefix ? "2.5rem" : theme.spacing[150]
                    }}
                    _placeholder={{
                        color: "beige.500",
                        textStyle: "preset4",
                    }}
                    _hover={{
                        borderColor: "grey.500",
                        _placeholder: {
                            color: "grey.900",
                            transition: "color 0.2s ease",
                        },
                        outline: "none",
                    }}
                    _focus={{
                        borderColor: "grey.900",
                        _placeholder: {
                            color: "grey.900",
                        },
                        outline: "none",
                        boxShadow: "none",
                    }}
                    placeholder={placeholder}
                    value={inputValue}
                    onChange={handleChange}
                    type={type}
                    {...props}
                    autoComplete={autoComplete}
                />
                {Icon &&
                    <InputRightElement>
                        <Icon onClick={onIconClick} width="1rem" height="1rem" weight={iconWeight} />
                    </InputRightElement>
                }
            </InputGroup>
            {helperText && <FormHelperText width="100%" textStyle="preset5" color={/^\d/.test(helperText) ? "grey.500" : "secondary.red"} textAlign="right">{helperText}</FormHelperText>}
        </FormControl>
    )
}

export default InputField;