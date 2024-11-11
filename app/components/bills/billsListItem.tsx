import { Flex, Text } from "@chakra-ui/react";
import { CheckCircle, WarningCircle } from "phosphor-react";
import { Transaction } from "~/types";
import theme from "~/theme";
import React from "react";
import TransactionImg from "../transactions/transactionImg";

interface BillsListItemProps {
    transaction: Transaction;
}

const BillsListItem: React.FC<BillsListItemProps> = ({ transaction }) => {
    const currentDate = new Date();
    const transactionDateAsDate = transaction.transactionDate.toDate();
    const daysDifference = Math.ceil((transactionDateAsDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24));

    const getDaysDifferenceColor = () => {
        if (daysDifference < 0) return "#277C78"; // Passed
        if (daysDifference <= 7) return "#C94736"; // Within 7 days
        return "grey.500"; // Further away than 7 days
    };

    const textColor = getDaysDifferenceColor();

    const amountColor = daysDifference < 0 ? "black" : (daysDifference <= 7 ? "#C94736" : "black");

    const checkIcon = () => {
        if (daysDifference < 0) return <CheckCircle color="#277C78" weight="fill" />; // Passed
        if (daysDifference <= 7) return <WarningCircle color="#C94736" weight="fill" />; // Within 7 days
        return null; // Further away than 7 days
    }

    const getOrdinalSuffix = (day: number) => {
        if (day > 3 && day < 21) return 'th';
        switch (day % 10) {
            case 1: return 'st';
            case 2: return 'nd';
            case 3: return 'rd';
            default: return 'th';
        }
    };

    const dayOfMonth = transactionDateAsDate.getDate();
    const ordinalSuffix = getOrdinalSuffix(dayOfMonth);
    const formattedDate = `Monthly - ${dayOfMonth}${ordinalSuffix}`;

    const formattedAmount = Math.abs(transaction.transactionAmt).toFixed(2);

    return (
        <Flex
            padding={`0rem ${theme.spacing[200]}`}
            align="center"
            gap={theme.spacing[400]}
            alignSelf="stretch"
            borderRadius={theme.spacing[100]}
        >
            {/* Desktop and tablet view */}
            <Flex width="100%" display={{ lg: "flex", md: "flex", sm: "none" }}>
                <Flex
                    align="center"
                    gap={theme.spacing[200]}
                    flex="2"
                >
                    <TransactionImg transaction={transaction} />
                    <Text textStyle="preset4bold" color="grey.900">{transaction.transactionName}</Text>
                </Flex>

                <Flex
                    flex="1"
                    align="center"
                    gap={theme.spacing[100]}
                >

                    <Text textStyle="preset5" color={textColor}>
                        {formattedDate}
                    </Text>
                    {checkIcon()}
                </Flex>

                <Flex
                    flex="1"
                    direction="column"
                    justify="center"
                    align="flex-end"
                    gap={theme.spacing[100]}
                >
                    <Text textStyle="preset4bold" textAlign="right" color={amountColor}>${formattedAmount}</Text>
                </Flex>
            </Flex>

            {/* Mobile view */}
            <Flex
                width="100%"
                display={{ lg: "none", md: "none", sm: "flex" }}
                direction="column"
                justify="center"
                gap={theme.spacing[100]}
            >
                <Flex
                    align="center"
                    gap={theme.spacing[200]}
                    flex="2"
                >
                    <TransactionImg transaction={transaction} />
                    <Text textStyle="preset4bold" color="grey.900">{transaction.transactionName}</Text>
                </Flex>

                <Flex width="100%" justify="space-between" align="flex-start" alignSelf="stretch">
                    <Flex
                        flex="1"
                        align="center"
                        gap={theme.spacing[100]}
                    >

                        <Text textStyle="preset5" color={textColor}>
                            {formattedDate}
                        </Text>
                        {checkIcon()}
                    </Flex>

                    <Flex
                        flex="1"
                        direction="column"
                        justify="center"
                        align="flex-end"
                        gap={theme.spacing[100]}
                    >
                        <Text textStyle="preset4bold" textAlign="right" color={amountColor}>${formattedAmount}</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default BillsListItem;