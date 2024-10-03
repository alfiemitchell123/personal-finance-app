import { Flex } from "@chakra-ui/react";
import theme from "~/theme";
import TransactionsListItem from "./transactionsListItem";

const TransactionsList = () => {
    return (
        <Flex
            direction="column"
            align="flex-start"
            gap={theme.spacing[250]}
        >
            <TransactionsListItem />
        </Flex>
    )
}

export default TransactionsList;