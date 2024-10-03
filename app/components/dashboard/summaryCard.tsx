import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import theme from "~/theme";

interface SummaryCardProps {
    label: string;
    amount: number;
    bg?: string;
    labelColor?: string;
    amountColor?: string;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ label, amount, bg, labelColor, amountColor }) => {
    return (
        <Flex
            p={theme.spacing[300]}
            direction="column"
            align="flex-start"
            gap={theme.spacing[150]}
            flex="1 0 0"
            bg={bg}
            borderRadius={theme.spacing[150]}
        >
            <Text
                color={labelColor}
                textStyle="preset4"
            >
                {label}
            </Text>
            <Text
                color={amountColor}
                textStyle="preset1"
            >
                ${amount.toFixed(2)}
            </Text>
        </Flex>
    )
}

export default SummaryCard;