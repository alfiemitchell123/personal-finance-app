import { Flex, Image, Text } from "@chakra-ui/react";
import SummaryTitle from "../dashboard/summaryTitle";
import theme from "~/theme";
import { Transaction } from "~/types";
import React from "react";

interface LatestSpendingTransactionProps {
    transaction: Transaction;
}

const LatestSpendingTransaction: React.FC<LatestSpendingTransactionProps> = ({ transaction }) => {
    const formatTransactionAmount = (amount: number) => {
        const sign = amount >= 0 ? "+" : "-";
        return `${sign}$${Math.abs(amount).toFixed(2)}`;
    }

    const formatDate = (date: any) => {
        // Handle Firestore Timestamp or regular JS Date
        const dateObj = date?.toDate ? date.toDate() : new Date(date);

        // Make sure the date is valid
        if (isNaN(dateObj.getTime())) {
            return "Invalid date";
        }

        const options = { day: "numeric", month: "short", year: "numeric" } as const;
        return dateObj.toLocaleDateString('en-UK', options);
    }

    return (
        <Flex
            align="center"
            gap={theme.spacing[200]}
            alignSelf="stretch"
        >
            <Flex
                align="center"
                gap={theme.spacing[200]}
                flex="1 0 0"
            >
                <Image
                    src={transaction.transactionImg}
                    width={8}
                    height={8}
                    borderRadius="2rem"
                />

                <Text textStyle="preset5bold" color="grey.900">
                    {transaction.transactionName}
                </Text>
            </Flex>
            <Flex
                direction="column"
                justify="center"
                align="flex-end"
                gap={theme.spacing[50]}
            >
                <Text textStyle="preset5bold" color="grey.900">
                    {formatTransactionAmount(transaction.transactionAmt)}
                </Text>
                <Text textStyle="preset5" color="grey.500">
                    {formatDate(transaction.transactionDate)}
                </Text>
            </Flex>
        </Flex>
    )
}

export default LatestSpendingTransaction;