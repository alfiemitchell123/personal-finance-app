import { Box, Divider, Flex } from "@chakra-ui/react";
import theme from "~/theme";
import TransactionsListItem from "./transactionsListItem";
import { Transaction } from "~/types";

interface TransactionsListProps {
    transactions?: Transaction[];
    limit?: number;
}

const TransactionsList = ({ limit, transactions = [] }: TransactionsListProps) => {
    // Limit transactions to the specified amount
    const displayedTransactions = limit ? transactions?.slice(0, limit) : transactions || [];

    console.log("Filtered transactions: ", transactions);
    console.log("Displayed transactions: ", displayedTransactions);

    return (
        <Flex
            direction="column"
            align="flex-start"
            gap={theme.spacing[250]}
            width="100%"
        >
            {displayedTransactions.map((transaction: Transaction, index: number) => (
                <Flex key={transaction.id} width="100%" direction="column" gap={theme.spacing[250]}>
                    <TransactionsListItem transaction={transaction} />
                    {index < displayedTransactions.length - 1 && <Divider orientation="horizontal" />}
                </Flex>
            ))}
        </Flex>
    )
}

export default TransactionsList;