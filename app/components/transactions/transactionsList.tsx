import { Box, Divider, Flex } from "@chakra-ui/react";
import theme from "~/theme";
import TransactionsListItem from "./transactionsListItem";
import useTransactionData from "~/hooks/useTransactions";
import { Transaction } from "~/types";

interface TransactionsListProps {
    limit?: number;
}

const TransactionsList = ({ limit }: TransactionsListProps) => {
    const { transactions, loading, error } = useTransactionData();

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>{error}</div>;
    }

    // Limit transactions to the specified amount
    const displayedTransactions = limit ? transactions?.slice(0, limit) : transactions || [];

    return (
        <Flex
            direction="column"
            align="flex-start"
            gap={theme.spacing[250]}
        >
            {displayedTransactions.map((transaction: Transaction, index: number) => (
                <Flex width="100%" direction="column" gap={theme.spacing[250]}>
                    <TransactionsListItem key={transaction.id} transaction={transaction} />
                    {index < transactions.length - 1 && <Divider orientation="horizontal" />}
                </Flex>
            ))}
        </Flex>
    )
}

export default TransactionsList;