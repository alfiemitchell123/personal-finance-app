import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import theme from "~/theme";

interface PotChartProps {
    totalSaved: number;
    percentage: string;
    targetAmt: number;
    barColor: string;
    barAmt: string;
}

const PotChart: React.FC<PotChartProps> = ({ totalSaved, percentage, targetAmt, barColor, barAmt }) => {
    return (
        <Flex
            gap={theme.spacing[200]}
            align="center"
            alignSelf="stretch"
            direction="column"
        >
            <Flex
                justify="space-between"
                align="center"
                alignSelf="stretch"
            >
                <Flex
                    align="center"
                    gap="0.6875rem"
                >
                    <Text textStyle="preset4" color="grey.500">Total Saved</Text>
                </Flex>
                <Text textStyle="preset1" color="grey.900">${totalSaved.toFixed(2)}</Text>
            </Flex>

            <Flex
                direction="column"
                align="flex-start"
                gap="0.8125rem"
                alignSelf="stretch"
            >
                <Flex
                    height={theme.spacing[100]}
                    align="flex-start"
                    alignSelf="stretch"
                    borderRadius={theme.spacing[50]}
                    bg="beige.100"
                >
                    <Box
                        width={barAmt} // change to variable data later
                        alignSelf="stretch"
                        borderRadius={theme.spacing[50]}
                        bg={barColor}
                    />
                    <Box flex="1 0 0" alignSelf="stretch" />
                </Flex>

                <Flex
                    align="flex-start"
                    gap={theme.spacing[100]}
                    alignSelf="stretch"
                >
                    <Flex flex="1 0 0">
                        <Text textStyle="preset5bold" color="grey.500">{percentage}%</Text>
                    </Flex>
                    <Flex>
                        <Text textStyle="preset5" color="grey.500">Target of ${targetAmt}</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default PotChart;