import { Flex, Text } from "@chakra-ui/react";
import SummaryTitle from "./summaryTitle";
import TransactionsList from "../transactions/transactionsList";
import useTransactionData from "~/hooks/useTransactions";
import theme from "~/theme";

const TransactionsSummary = () => {
    const { transactions } = useTransactionData();

    return (
        <Flex
            p={theme.spacing[400]}
            direction="column"
            align="flex-start"
            gap={theme.spacing[400]}
            alignSelf="stretch"
            borderRadius={theme.spacing[150]}
            bg="white"
            height="100%"
        >
            <SummaryTitle
                title="Transactions"
                titleStyle="preset2"
                link="/transactions"
                linkText="See Details"
            />

            {transactions ? (
                <Flex
                    direction="column"
                    align="space-between"
                    gap={theme.spacing[250]}
                    alignSelf="stretch"
                >
                    <TransactionsList transactions={transactions} limit={4} />
                </Flex>
            ) : (
                <Flex
                    width="100%"
                    justify="center"
                    align="center"
                    direction="column"
                    mt={theme.spacing[500]}
                >
                    <Text textStyle="preset4">
                        Add transactions to get started.
                    </Text>
                </Flex>
            )}
        </Flex>
    )
}

export default TransactionsSummary;