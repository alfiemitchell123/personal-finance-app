import React from "react";
import { Box, Flex, IconButton, Text, useBreakpointValue } from "@chakra-ui/react";
import TransactionImg from "./transactionImg";
import { useLocation } from "@remix-run/react";
import theme from "~/theme";
import { Transaction } from "~/types";
import { PencilSimple, Trash } from "phosphor-react";
import { Timestamp } from "firebase/firestore";

interface TransactionsListItemProps {
    transaction: Transaction;
    onEdit: (id: string) => void;
    onDelete: (id: string) => void;
}

const TransactionsListItem: React.FC<TransactionsListItemProps> = ({ transaction, onEdit, onDelete }) => {
    const location = useLocation();

    const formatTransactionAmount = (amount: number) => {
        const sign = amount >= 0 ? "+" : "-";
        return `${sign}$${Math.abs(amount).toFixed(2)}`;
    }

    const formatDate = (date: Date | Timestamp) => {
        const dateObj = date instanceof Timestamp ? date.toDate() : date;
        const options = { day: "numeric", month: "short", year: "numeric" } as const;
        return new Date(dateObj).toLocaleDateString('en-UK', options);
    }

    // style it depending on whether it's the overview transactions summary or on the main transaction page
    const locationTransactionRoute = location.pathname === "/transactions";

    return (
        <Box width="100%" position="relative" _hover={{ ".action-buttons": { opacity: 1 } }}>
            {/* Desktop view */}
            <Flex
                display={{
                    lg: "flex",
                    md: "flex",
                    sm: "none"
                }}
                justify={locationTransactionRoute ? "normal" : "space-between"}
                align="center"
                width="100%"
                key={`${transaction.id}-desktop`}
                padding={locationTransactionRoute ? `0rem ${theme.spacing[150]}` : "none"}
                gap={locationTransactionRoute ? theme.spacing[400] : "none"}
            >
                <Flex
                    align="center"
                    gap={theme.spacing[200]}
                    flex="1"
                >
                    <TransactionImg transaction={transaction} />
                    <Text textStyle="preset4bold">{transaction.transactionName}</Text>
                </Flex>

                {locationTransactionRoute && (
                    <Flex
                        width="7.5rem"
                        direction="column"
                        justify="center"
                        align="flex-start"
                    >
                        <Text textStyle="preset5" color="grey.500">{transaction.transactionCategory}</Text>
                    </Flex>
                )}

                {locationTransactionRoute && (
                    <Flex
                        width="7.5rem"
                        direction="column"
                        justify="center"
                        align="flex-start"
                    >
                        <Text textStyle="preset5" color="grey.500">{formatDate(transaction.transactionDate)}</Text>
                    </Flex>
                )}

                {locationTransactionRoute && (
                    <Flex
                        width="12.5rem"
                        direction="column"
                        justify="center"
                        align="flex-end"
                    >
                        <Text
                            textStyle="preset4bold"
                            color={transaction.transactionAmt >= 0 ? "secondary.green" : "black"}
                            textAlign="right">
                            {formatTransactionAmount(transaction.transactionAmt)}
                        </Text>
                    </Flex>
                )}

                {!locationTransactionRoute && (
                    <Flex
                        direction="column"
                        justify="center"
                        align="flex-end"
                        gap={theme.spacing[100]}
                    >
                        <Text
                            textStyle="preset4bold"
                            color={transaction.transactionAmt >= 0 ? "secondary.green" : "black"}
                            textAlign="right">
                            {formatTransactionAmount(transaction.transactionAmt)}
                        </Text>

                        <Text
                            textStyle="preset5"
                            color="grey.500"
                        >
                            {formatDate(transaction.transactionDate)}
                        </Text>
                    </Flex>
                )}
                {locationTransactionRoute && (
                    <Flex
                        padding={theme.spacing[100]}
                        position="absolute"
                        right={theme.spacing[100]}
                        top="50%"
                        transform="translateY(-50%)"
                        className="action-buttons"
                        opacity="0"
                        transition="opacity 0.2s"
                        gap={theme.spacing[100]}
                        bg="white"
                        boxShadow="0px 2px 6px rgba(0, 0, 0, 0.25)"
                        borderRadius={theme.spacing[200]}
                    >
                        <IconButton
                            aria-label="Edit transaction"
                            icon={<PencilSimple />}
                            onClick={() => onEdit(transaction.id)}
                            size="sm"
                            variant="ghost"
                            borderRadius={theme.spacing[200]}
                        />
                        <IconButton
                            aria-label="Delete transaction"
                            icon={<Trash />}
                            onClick={() => onDelete(transaction.id)}
                            size="sm"
                            variant="ghost"
                            borderRadius={theme.spacing[200]}
                        />
                    </Flex>
                )}
            </Flex>

            {/* Mobile view */}
            <Flex
                mt={theme.spacing[100]}
                display={{
                    lg: "none",
                    md: "none",
                    sm: "flex"
                }}
                justify={locationTransactionRoute ? "normal" : "space-between"}
                align="center"
                width="100%"
                key={`${transaction.id}-mobile`}
                padding={locationTransactionRoute ? `0rem ${theme.spacing[150]}` : "none"}
                gap={locationTransactionRoute ? theme.spacing[400] : "none"}
            >
                <Flex
                    align="center"
                    gap={theme.spacing[200]}
                    flex="1"
                >
                    <TransactionImg transaction={transaction} />

                    <Flex
                        direction="column"
                        justify="center"
                        align="flex-start"
                        gap={theme.spacing[100]}
                        alignSelf="stretch"
                    >
                        <Text textStyle="preset4bold">{transaction.transactionName}</Text>
                        <Text textStyle="preset5" color="grey.500">{transaction.transactionCategory}</Text>
                    </Flex>
                </Flex>

                <Flex
                    direction="column"
                    justify="center"
                    align="flex-end"
                    gap={theme.spacing[50]}
                >
                    <Text
                        textStyle="preset4bold"
                        color={transaction.transactionAmt >= 0 ? "secondary.green" : "black"}
                        textAlign="right">
                        {formatTransactionAmount(transaction.transactionAmt)}
                    </Text>
                    <Text textStyle="preset5" color="grey.500">{formatDate(transaction.transactionDate)}</Text>
                </Flex>
            </Flex>
        </Box>
    )
}

export default TransactionsListItem;