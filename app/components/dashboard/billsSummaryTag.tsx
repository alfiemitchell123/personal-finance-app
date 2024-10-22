import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import theme from "~/theme";

interface BillsSummaryTagProps {
    color: string;
    label: string;
    amount: number;
}

const BillsSummaryTag: React.FC<BillsSummaryTagProps> = ({ color, label, amount }) => {
    return (
        <Flex
            padding={`${theme.spacing[250]} ${theme.spacing[200]}`}
            justify="space-between"
            align="center"
            alignSelf="stretch"
            borderRadius={theme.spacing[100]}
            borderLeft={`${theme.spacing[50]} solid ${color}`}
            bg="beige.100"
        >
            <Text textStyle="preset4" color="grey.500">{label}</Text>
            <Text textStyle="preset4bold" color="grey.900">${amount.toFixed(2)}</Text>
        </Flex>
    )
}

export default BillsSummaryTag;