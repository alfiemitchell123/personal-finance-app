import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import theme from "~/theme";

interface PotChartForModalProps {
    newAmount: number;
    percentage: number;
    targetAmt: number | undefined;
    savedAmtBarWidth: number;
    addOrWithdrawAmtBarWidth: number;
    barColor: string;
}

const PotChartForModal: React.FC<PotChartForModalProps> = ({ newAmount, percentage, targetAmt, savedAmtBarWidth, addOrWithdrawAmtBarWidth, barColor }) => {
    const gap = theme.spacing[50];

    return (
        <Flex
            gap={theme.spacing[200]}
            direction="column"
            align="flex-start"
            width="100%"
        >
            <Flex justify="space-between" align="center" width="100%">
                <Text textStyle="preset4" color="grey.500">New Amount</Text>
                <Text textStyle="preset1" color="grey.900" textAlign="right">${newAmount.toFixed(2)}</Text>
            </Flex>
            <Flex direction="column" align="flex-start" width="100%">
                <Flex
                    width="100%"
                    height={theme.spacing[100]}
                    align="center"
                    borderRadius={theme.spacing[50]}
                    bg="beige.100"
                    position="relative"
                >
                    <Box
                        height={theme.spacing[100]}
                        width={`${savedAmtBarWidth}%`}
                        bg="grey.900"
                        borderRadius={`${theme.spacing[50]} 0rem 0rem ${theme.spacing[50]}}`}
                        position="absolute"
                        left={0}
                    />
                    <Box
                        height={theme.spacing[100]}
                        width={`${addOrWithdrawAmtBarWidth}%`}
                        bg={barColor}
                        borderRadius={`0rem ${theme.spacing[50]} ${theme.spacing[50]} 0rem`}
                        position="absolute"
                        left={`calc(${savedAmtBarWidth}% + 0.125rem)`}
                    />
                </Flex>
            </Flex>
            <Flex align="flex-start" gap={theme.spacing[100]} width="100%">
                <Text flex="1" textStyle="preset5bold" color={barColor}>{percentage}%</Text>
                <Text flex="1" textStyle="preset5" color="grey.500" textAlign="right">Target of ${targetAmt}</Text>
            </Flex>
        </Flex>
    )
}

export default PotChartForModal;