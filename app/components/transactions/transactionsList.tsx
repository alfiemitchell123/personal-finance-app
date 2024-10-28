import { Box, Divider, Flex } from "@chakra-ui/react";
import theme from "~/theme";
import TransactionsListItem from "./transactionsListItem";
import { Transaction } from "~/types";
import useModal from "~/hooks/useModal";
import TransactionModal from "./transactionModal";

interface TransactionsListProps {
    transactions?: Transaction[];
    limit?: number;
}

const TransactionsList = ({ limit, transactions = [] }: TransactionsListProps) => {
    const { isModalOpen, transactionModalMode, openEditTransactionModal, openDeleteTransactionModal, closeModal, selectedItem } = useModal();
    const selectedTransaction = transactions?.find((transaction) => transaction.id === selectedItem);

    // Limit transactions to the specified amount
    const displayedTransactions = limit ? transactions?.slice(0, limit) : transactions || [];

    const handleEdit = (id: string) => {
        openEditTransactionModal(id);
    };

    const handleDelete = (id: string) => {
        openDeleteTransactionModal(id);
    };

    return (
        <Flex
            direction="column"
            align="flex-start"
            gap={theme.spacing[250]}
            width="100%"
        >
            {displayedTransactions.map((transaction: Transaction, index: number) => (
                <Flex key={transaction.id} width="100%" direction="column" gap={theme.spacing[250]}>
                    <TransactionsListItem transaction={transaction} onEdit={handleEdit} onDelete={handleDelete} />
                    {index < displayedTransactions.length - 1 && <Divider orientation="horizontal" />}
                </Flex>
            ))}
            {isModalOpen && (
                <TransactionModal
                    mode={transactionModalMode}
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    transactionId={selectedTransaction?.id}
                    existingTransaction={selectedTransaction}
                />
            )}
        </Flex>
    )
}

export default TransactionsList;