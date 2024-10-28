import { Box, Flex, Text } from "@chakra-ui/react";
import { Budget, Transaction } from "~/types";
import theme from "~/theme";
import React from "react";
import BudgetTitle from "./budgetTitle";
import BudgetPercentageBar from "./budgetPercentageBar";
import LatestSpending from "./latestSpending";
import useTransactionData from "~/hooks/useTransactions";
import PageLoading from "../ui/pageLoading";

interface BudgetCardProps {
    budget: Budget;
    onEdit: (id: string) => void;
    onDelete: (id: string) => void;
}

const BudgetCard: React.FC<BudgetCardProps> = ({ budget, onEdit, onDelete }) => {
    const { transactions, loading } = useTransactionData();

    if (loading) {
        return <PageLoading />;
    }

    return (
        <Flex
            padding={theme.spacing[400]}
            direction="column"
            align="flex-start"
            gap={theme.spacing[250]}
            alignSelf="stretch"
            borderRadius={theme.spacing[150]}
            bg="white"
        >
            <BudgetTitle
                fill={budget.budgetColor}
                budgetCategory={budget.budgetCategory}
                onEdit={() => onEdit(budget.id)}
                onDelete={() => onDelete(budget.id)}
            />

            <Flex
                direction="column"
                align="flex-start"
                gap={theme.spacing[200]}
                alignSelf="stretch"
            >
                <Flex
                    align="center"
                    gap={theme.spacing[200]}
                    alignSelf="stretch"
                >
                    <Text textStyle="preset4" color="grey.500">Maximum of ${budget.maxSpend.toFixed(2)}</Text>
                </Flex>

                <BudgetPercentageBar budget={budget} />

                <Flex
                    justify="space-between"
                    align="flex-start"
                    gap={theme.spacing[200]}
                    alignSelf="stretch"
                >
                    <Flex
                        align="center"
                        gap={theme.spacing[200]}
                        flex="1"
                    >
                        <Box
                            width={theme.spacing[50]}
                            alignSelf="stretch"
                            borderRadius={theme.spacing[100]}
                            bg={budget.budgetColor}
                        />
                        <Flex direction="column" gap={theme.spacing[50]}>
                            <Text textStyle="preset5" color="grey.500">
                                Spent
                            </Text>
                            <Text textStyle="preset4bold" color="grey.900">
                                ${budget.totalSpent.toFixed(2)}
                            </Text>
                        </Flex>
                    </Flex>

                    <Flex
                        align="center"
                        gap={theme.spacing[200]}
                        flex="1"
                    >
                        <Box
                            width={theme.spacing[50]}
                            alignSelf="stretch"
                            borderRadius={theme.spacing[100]}
                            bg="beige.100"
                        />
                        <Flex direction="column" gap={theme.spacing[50]}>
                            <Text textStyle="preset5" color="grey.500">
                                Remaining
                            </Text>
                            <Text textStyle="preset4bold" color="grey.900">
                                ${budget.totalRemaining.toFixed(2)}
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>
                {transactions &&
                    transactions
                        .filter((t: Transaction) => t.transactionCategory === budget.budgetCategory && t.transactionAmt < 0)
                        .length > 0 && (
                        <LatestSpending budget={budget} />
                    )}
            </Flex>
        </Flex>
    )
}

export default BudgetCard;