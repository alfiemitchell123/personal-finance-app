import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { CheckCircle, WarningCircle } from "phosphor-react";
import { Transaction } from "~/types";
import theme from "~/theme";
import React from "react";
import TransactionImg from "../transactions/transactionImg";
import { format, addMonths, lastDayOfMonth, getDate, isValid } from 'date-fns';

interface BillsListItemProps {
    transaction: Transaction;
}

const getNextBillDate = (originalTransactionDate: Date, currentDate: Date) => {
    // Get the day of the current month
    const currentDayOfMonth = getDate(currentDate);

    // Initialize nextBillDate with the current month's transaction date
    let nextBillDate = new Date(currentDate);
    nextBillDate.setDate(originalTransactionDate.getDate());

    // If the next bill date is in the past (before today), move it to the next month
    if (nextBillDate < currentDate) {
        nextBillDate = addMonths(nextBillDate, 1); // Move to the next month
    }

    // Format next bill date for display
    const formattedNextBillDate = format(nextBillDate, 'E MMM dd yyyy');
    const daysDifference = Math.floor((nextBillDate.getTime() - currentDate.getTime()) / (1000 * 3600 * 24));

    return { nextBillDate, formattedNextBillDate, daysDifference };
};

const BillsListItem: React.FC<BillsListItemProps> = ({ transaction }) => {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0); // Reset time to midnight

    const transactionDateAsDate = transaction.transactionDate.toDate();
    const transactionDayOfMonth = transactionDateAsDate.getDate();

    // Get the next bill date based on the original transaction date and the current date
    const { nextBillDate, formattedNextBillDate, daysDifference } = getNextBillDate(transactionDateAsDate, currentDate);

    // Determine the color based on `daysDifference`
    const getDaysDifferenceColor = () => {
        if (daysDifference < 0) return "#277C78"; // Past due, marked as "paid"
        if (daysDifference <= 7) return "#C94736"; // Due within the next 7 days
        return "grey.500"; // Due further than 7 days
    };

    // Determine icon based on `daysDifference`
    const checkIcon = () => {
        if (daysDifference < 0) return <CheckCircle color="#277C78" weight="fill" />; // Paid
        if (daysDifference <= 7) return <WarningCircle color="#C94736" weight="fill" />; // Due soon
        return null; // Further away than 7 days
    };

    // Display colors for text and amount
    const textColor = getDaysDifferenceColor();
    const amountColor = daysDifference < 0 ? "black" : (daysDifference <= 7 ? "#C94736" : "black");

    // Helper function to get ordinal suffix
    const getOrdinalSuffix = (day: number) => {
        if (day > 3 && day < 21) return 'th'; // Covers 11th, 12th, 13th
        switch (day % 10) {
            case 1: return 'st';
            case 2: return 'nd';
            case 3: return 'rd';
            default: return 'th';
        }
    };

    const ordinalSuffix = getOrdinalSuffix(transactionDayOfMonth);
    const formattedDate = `Monthly - ${transactionDayOfMonth}${ordinalSuffix}`;
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