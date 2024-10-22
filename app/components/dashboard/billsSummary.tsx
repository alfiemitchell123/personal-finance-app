import { Flex } from "@chakra-ui/react";
import SummaryTitle from "./summaryTitle";
import theme from "~/theme";
import BillsSummaryTag from "./billsSummaryTag";

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

            <Flex
                direction="column"
                align="flex-start"
                gap={theme.spacing[150]}
                alignSelf="stretch"
            >
                <BillsSummaryTag color={`${theme.colors.secondary.green}`} label="Paid Bills" amount={190} />
                <BillsSummaryTag color={`${theme.colors.secondary.yellow}`} label="Total Upcoming" amount={194.98} />
                <BillsSummaryTag color={`${theme.colors.secondary.cyan}`} label="Due Soon" amount={59.98} />
            </Flex>
        </Flex>
    )
}

export default BillsSummary;