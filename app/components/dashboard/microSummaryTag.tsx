import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import theme from "~/theme";

interface MicroSummaryProps {
    color: string;
    label: string;
    amount: number;
}

const MicroSummaryTag: React.FC<MicroSummaryProps> = ({ color, label, amount }) => {
    return (
        <Flex
            align="center"
            gap={theme.spacing[200]}
            flex="1 0 0"
        >
            <Box
                width={theme.spacing[50]}
                alignSelf="stretch"
                borderRadius={theme.spacing[100]}
                bg={color}
            />
            <Flex
                direction="column"
            >
                <Text
                    textStyle="preset5"
                    color="grey.500"
                >
                    {label}
                </Text>
                <Text
                    textStyle="preset4bold"
                    color="grey.900"
                >
                    ${amount}
                </Text>
            </Flex>
        </Flex>
    )
}

export default MicroSummaryTag;