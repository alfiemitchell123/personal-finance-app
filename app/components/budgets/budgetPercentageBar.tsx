import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import theme from "~/theme";
import { Budget } from "~/types";

interface BudgetPercentageBarProps {
    budget: Budget;
}

const BudgetPercentageBar: React.FC<BudgetPercentageBarProps> = ({ budget }) => {
    const percentageSpent = (budget.totalSpent / budget.maxSpend) * 100;

    return (
        <Box width="100%" position="relative">
            <Flex
                height={theme.spacing[400]}
                padding={theme.spacing[50]}
                align="flex-start"
                alignSelf="stretch"
                borderRadius={theme.spacing[50]}
                bg="beige.100"
            >
                <Box
                    position="absolute"
                    height={theme.spacing[300]}
                    maxW="98.5%"
                    width={`${percentageSpent}%`}
                    bg={budget.budgetColor}
                    borderRadius={theme.spacing[50]}
                />
            </Flex>
        </Box>
    )
}

export default BudgetPercentageBar;