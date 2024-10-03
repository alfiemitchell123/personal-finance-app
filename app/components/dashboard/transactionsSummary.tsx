import { Flex } from "@chakra-ui/react";
import SummaryTitle from "./summaryTitle";
import TransactionsList from "../transactions/transactionsList";
import theme from "~/theme";

const TransactionsSummary = () => {
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
            <SummaryTitle title="Transactions" />

            <Flex
                direction="column"
                align="flex-start"
                gap={theme.spacing[250]}
                alignSelf="stretch"
            >
                <TransactionsList />
            </Flex>
        </Flex>
    )
}

export default TransactionsSummary;