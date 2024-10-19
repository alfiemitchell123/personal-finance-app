import { Flex } from "@chakra-ui/react";
import SummaryTitle from "./summaryTitle";
import theme from "~/theme";

const BillsSummary = () => {
    return (
        <Flex
            p={theme.spacing[400]}
            direction="column"
            align="flex-start"
            gap={theme.spacing[250]}
            alignSelf="stretch"
            borderRadius={theme.spacing[150]}
            background="white"
            height="100%"
            flex="1 0 0"
        >
            <SummaryTitle
                title="Recurring Bills"
                titleStyle="preset2"
                link="/bills"
                linkText="See Details"
            />
        </Flex>
    )
}

export default BillsSummary;