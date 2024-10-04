import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import TransactionImg from "./transactionImg";
import theme from "~/theme";
import { Transaction } from "~/types";

interface TransactionsListItemProps {
    transaction: Transaction;
}

const TransactionsListItem: React.FC<TransactionsListItemProps> = ({ transaction }) => {
    const formatTransactionAmount = (amount: number) => {
        const sign = amount >= 0 ? "+" : "-";
        return `${sign}$${Math.abs(amount).toFixed(2)}`;
    }

    const formatDate = (date: any) => {
        const dateObj = date.toDate ? date.toDate() : date;
        const options = { day: "numeric", month: "short", year: "numeric" } as const;
        return new Date(dateObj).toLocaleDateString('en-UK', options);
    }

    return (
        <Flex
            justify="space-between"
            align="center"
            width="100%"
            key={transaction.id}
        >
            <Flex
                align="center"
                gap={theme.spacing[200]}
                flex="1 0 0"
            >
                <TransactionImg transaction={transaction} />
                <Text textStyle="preset4bold">{transaction.transactionName}</Text>
            </Flex>

            <Flex
                direction="column"
                justify="center"
                align="flex-end"
                gap={theme.spacing[100]}
            >
                <Text
                    textStyle="preset4bold"
                    color={transaction.transactionAmt >= 0 ? "secondary.green" : "black"}
                    textAlign="right">
                    {formatTransactionAmount(transaction.transactionAmt)}
                </Text>
                <Text
                    textStyle="preset5"
                    color="grey.500"
                >
                    {formatDate(transaction.transactionDate)}
                </Text>
            </Flex>
        </Flex>
    )
}

export default TransactionsListItem;