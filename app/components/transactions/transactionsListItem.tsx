import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import TransactionImg from "./transactionImg";
import { useLocation } from "@remix-run/react";
import theme from "~/theme";
import { Transaction } from "~/types";

interface TransactionsListItemProps {
    transaction: Transaction;
}

const TransactionsListItem: React.FC<TransactionsListItemProps> = ({ transaction }) => {
    const location = useLocation();

    const formatTransactionAmount = (amount: number) => {
        const sign = amount >= 0 ? "+" : "-";
        return `${sign}$${Math.abs(amount).toFixed(2)}`;
    }

    const formatDate = (date: any) => {
        const dateObj = date.toDate ? date.toDate() : date;
        const options = { day: "numeric", month: "short", year: "numeric" } as const;
        return new Date(dateObj).toLocaleDateString('en-UK', options);
    }

    // style it depending on whether it's the overview transactions summary or on the main transaction page
    const locationTransactionRoute = location.pathname === "/transactions";

    return (
        <Flex
            justify={locationTransactionRoute ? "normal" : "space-between"}
            align="center"
            width="100%"
            key={transaction.id}
            padding={locationTransactionRoute ? `0rem ${theme.spacing[200]}` : "none"}
            gap={locationTransactionRoute ? theme.spacing[400] : "none"}
        >
            <Flex
                align="center"
                gap={theme.spacing[200]}
                flex="1 0 0"
            >
                <TransactionImg transaction={transaction} />
                <Text textStyle="preset4bold">{transaction.transactionName}</Text>
            </Flex>

            {locationTransactionRoute && (
                <Flex
                    width="7.5rem"
                    direction="column"
                    justify="center"
                    align="flex-start"
                >
                    <Text textStyle="preset5" color="grey.500">{transaction.transactionCategory}</Text>
                </Flex>
            )}

            {locationTransactionRoute && (
                <Flex
                    width="7.5rem"
                    direction="column"
                    justify="center"
                    align="flex-start"
                >
                    <Text textStyle="preset5" color="grey.500">{formatDate(transaction.transactionDate)}</Text>
                </Flex>
            )}

            {locationTransactionRoute && (
                <Flex
                    width="12.5rem"
                    direction="column"
                    justify="center"
                    align="flex-end"
                >
                    <Text
                        textStyle="preset4bold"
                        color={transaction.transactionAmt >= 0 ? "secondary.green" : "black"}
                        textAlign="right">
                        {formatTransactionAmount(transaction.transactionAmt)}
                    </Text>
                </Flex>
            )}

            {!locationTransactionRoute && (
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
            )}
        </Flex>
    )
}

export default TransactionsListItem;