import { Flex } from "@chakra-ui/react";
import PageLoading from "~/components/ui/pageLoading";
import MainContent from "~/components/layout/app/mainContent";
import PageHeader from "~/components/layout/app/pageHeader";
import TransactionContent from "~/components/transactions/transactionContent";
import useTransactionData from "~/hooks/useTransactions";
import { Protected } from "./protected";

export default function TransactionsRoute() {
    const { transactions, loading, error } = useTransactionData();

    // Handle the loading and error state
    if (loading) return (
        <PageLoading />
    );
    if (error) return <div>{error}</div>;

    return (
        <Protected>
            <MainContent>
                <PageHeader>
                    Transactions
                </PageHeader>
                <TransactionContent transactions={transactions} />
            </MainContent>
        </Protected>
    )
}