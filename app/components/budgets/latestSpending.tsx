import { Divider, Flex, Text } from "@chakra-ui/react";
import SummaryTitle from "../dashboard/summaryTitle";
import theme from "~/theme";
import LatestSpendingTransaction from "./latestSpendingTransaction";
import { Transaction, Budget } from "~/types";
import useTransactionData from "~/hooks/useTransactions";
import React from "react";
import PageLoading from "../ui/pageLoading";

interface LatestSpendingProps {
    budget: Budget;
}

const LatestSpending: React.FC<LatestSpendingProps> = ({ budget }) => {
    const { transactions, loading } = useTransactionData();

    if (loading) {
        return <PageLoading />;
    }

    return (
        <Flex
            padding={theme.spacing[250]}
            direction="column"
            justify="center"
            align="flex-start"
            gap={theme.spacing[250]}
            alignSelf="stretch"
            borderRadius={theme.spacing[150]}
            bg="beige.100"
        >
            <SummaryTitle
                title="Latest Spending"
                link="/transactions"
                linkText="See All"
                titleStyle="preset3"
            />

            <Flex
                direction="column"
                align="flex-start"
                gap={theme.spacing[150]}
                alignSelf="stretch"
            >
                {transactions && (
                    transactions
                        .filter((t: Transaction) => t.transactionCategory === budget.budgetCategory && t.transactionAmt < 0)
                        .sort((a, b) => (b.transactionDate).toDate().getTime() - (a.transactionDate).toDate().getTime())
                        .slice(0, 3)
                        .map((filteredTransaction: Transaction, index: number, filteredArray) => (
                            <React.Fragment key={filteredTransaction.id}>
                                <LatestSpendingTransaction transaction={filteredTransaction} />
                                {index < filteredArray.length - 1 && (
                                    <Divider borderColor="gray.300" />
                                )}
                            </React.Fragment>
                        ))
                )}
            </Flex>
        </Flex >
    )
}

export default LatestSpending;