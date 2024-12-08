import { Box, Button, Flex, Text } from "@chakra-ui/react";
import {CaretLeft} from "@phosphor-icons/react/dist/ssr/CaretLeft";
import {CaretRight} from "@phosphor-icons/react/dist/ssr/CaretRight";
import theme from "~/theme";

interface PaginationButtonProps {
    label: string | number;
    isPageNumber?: boolean;
    isActive?: boolean;
    isDisabled?: boolean;
    onClick?: () => void;
}

const PaginationButton: React.FC<PaginationButtonProps> = ({ label, isPageNumber, isActive, isDisabled, onClick }) => {
    return (
        <Button
            display="flex"
            height={theme.spacing[500]}
            padding={theme.spacing[200]}
            justifyContent="center"
            alignItems="center"
            gap={theme.spacing[200]}
            borderRadius={theme.spacing[100]}
            border={`1px solid ${theme.colors.beige[500]}`}
            bg={isActive ? "grey.900" : "white"}
            onClick={onClick}
            _hover={{
                bg: isActive ? "grey.900" : "beige.100",
            }}
            isDisabled={isDisabled}
        >
            {isPageNumber ? (
                <Text
                    color={isActive ? "white" : "grey.900"}
                    textStyle="preset4"
                    fontWeight={400}
                >
                    {label}
                </Text>
            ) : label === "Prev" ? (
                <Flex align="center" gap={theme.spacing[200]}>
                    <CaretLeft weight="fill" color={theme.colors.grey[500]} />
                    <Text textStyle="preset4" color="grey.900" fontWeight={400}>Prev</Text>
                </Flex>
            ) : label === "Next" ? (
                <Flex align="center" gap={theme.spacing[200]}>
                    <Text textStyle="preset4" color="grey.900" fontWeight={400}>Next</Text>
                    <CaretRight weight="fill" color={theme.colors.grey[500]} />
                </Flex>
            ) : (
                null
            )}
        </Button>
    )
}

export default PaginationButton;
