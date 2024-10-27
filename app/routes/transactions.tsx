import { Flex } from "@chakra-ui/react";
import PageLoading from "~/components/ui/pageLoading";
import MainContent from "~/components/layout/app/mainContent";
import PageHeader from "~/components/layout/app/pageHeader";
import TransactionContent from "~/components/transactions/transactionContent";
import useTransactionData from "~/hooks/useTransactions";
import { Protected } from "./protected";
import useModal from "~/hooks/useModal";
import TransactionModal from "~/components/transactions/transactionModal";

export default function TransactionsRoute() {
    const { transactions, loading } = useTransactionData();
    const { isModalOpen, transactionModalMode, selectedItem, openAddTransactionModal, openEditTransactionModal, openDeleteTransactionModal, closeModal } = useModal();

    const selectedTransaction = transactions?.find((transaction) => transaction.id === selectedItem);

    return (
        <Protected>
            <MainContent>
                {loading ? (
                    <PageLoading />
                ) : (
                    <>
                        <PageHeader openModal={openAddTransactionModal}>
                            Transactions
                        </PageHeader>
                        {isModalOpen && (
                            <TransactionModal
                                mode={transactionModalMode}
                                isOpen={isModalOpen}
                                onClose={closeModal}
                                transactionId={selectedTransaction?.id}
                                existingTransaction={selectedTransaction}
                            />
                        )}
                        <TransactionContent transactions={transactions} />
                    </>
                )}
            </MainContent>
        </Protected>
    )
}