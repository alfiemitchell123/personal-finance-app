import { useEffect, useState } from "react";
import { Divider, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { Receipt, MagnifyingGlass } from "phosphor-react";
import MainContent from "~/components/layout/app/mainContent";
import PageHeader from "~/components/layout/app/pageHeader";
import DropdownMenu, { DropdownMenuItem } from "~/components/ui/dropdownMenu";
import InputField from "~/components/ui/inputField";
import theme from "~/theme";
import BillsListItem from "~/components/bills/billsListItem";
import useTransactionData from "~/hooks/useTransactions";
import PageLoading from "~/components/ui/pageLoading";
import React from "react";
import { Transaction } from "~/types";
import { sortTransactions, filterTransactionsByRecurringBill, filterTransactionsByName } from "~/utils/transactionFilters";

const sortMenuItems: DropdownMenuItem[] = [
    { itemLabel: 'Latest', value: 'latest' },
    { itemLabel: 'Oldest', value: 'oldest' },
    { itemLabel: 'A to Z', value: 'aToZ' },
    { itemLabel: 'Z to A', value: 'zToA' },
    { itemLabel: 'Lowest', value: 'lowest' },
    { itemLabel: 'Highest', value: 'highest' },
];

export default function BillsRoute() {
    const { transactions, loading } = useTransactionData();
    const [filter, setFilter] = useState<string>('latest');
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [filteredTransactions, setFilteredTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        // First filter by recurring bills
        let result = filterTransactionsByRecurringBill(transactions);

        // Then filter by search term
        if (searchTerm) {
            result = filterTransactionsByName(result, searchTerm);
        }

        // Finally sort the filtered transactions
        result = sortTransactions(result, filter);

        setFilteredTransactions(result);
    }, [searchTerm, filter, transactions]);

    const handleFilterChange = (item: DropdownMenuItem) => {
        setFilter(item.value);
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const totalBill = filteredTransactions?.reduce((sum, transaction) => {
        if (transaction.recurringBill) {
            return sum + Math.abs(transaction.transactionAmt || 0);
        }
        return sum;
    }, 0) || 0;

    return (
        <MainContent>
            {loading ? (
                <Flex
                    height="100vh"
                    width="100%"
                    align="center"
                    justify="center"
                >
                    <PageLoading />
                </Flex>
            ) : (
                <>
                    <PageHeader>
                        Recurring Bills
                    </PageHeader>
                    <Grid width="100%" templateColumns="repeat(12, 1fr)" templateRows="1fr" gap={theme.spacing[300]}>
                        <GridItem gridArea="1 / 1 / 2 / 5">
                            <Flex
                                maxW="21.0625rem"
                                direction="column"
                                align="flex-start"
                                gap={theme.spacing[300]}
                                flex="1 0 0"
                            >
                                <Flex
                                    padding={theme.spacing[300]}
                                    direction="column"
                                    align="flex-start"
                                    justify="flex-end"
                                    gap={theme.spacing[400]}
                                    alignSelf="stretch"
                                    borderRadius={theme.spacing[150]}
                                    bg="grey.900"
                                >
                                    <Receipt width={theme.spacing[500]} height={theme.spacing[500]} color="white" weight="light" />
                                    <Flex
                                        direction="column"
                                        align="flex-start"
                                        gap="0.6785rem"
                                        alignSelf="stretch"
                                    >
                                        <Text textStyle="preset4" color="white">Total Bills</Text>
                                        <Text textStyle="preset1" color="white">${totalBill.toFixed(2)}</Text>
                                    </Flex>
                                </Flex>

                                <Flex
                                    padding={theme.spacing[250]}
                                    direction="column"
                                    justify="center"
                                    align="flex-start"
                                    gap={theme.spacing[250]}
                                    alignSelf="stretch"
                                    borderRadius={theme.spacing[150]}
                                    bg="white"
                                >
                                    <Text textStyle="preset3" color="grey.900">Summary</Text>

                                    <Flex
                                        direction="column"
                                        align="space-between"
                                        gap={theme.spacing[200]}
                                        alignSelf="stretch"
                                    >
                                        <Flex
                                            justify="space-between"
                                            align="center"
                                            flex="1 0 0"
                                        >
                                            <Text textStyle="preset5" color="grey.500">Paid Bills</Text>
                                            <Text textStyle="preset5bold" color="grey.900">4 ($190.00)</Text>
                                        </Flex>
                                        <Divider height="0.0625rem" />
                                        <Flex
                                            justify="space-between"
                                            align="center"
                                            flex="1 0 0"
                                        >
                                            <Text textStyle="preset5" color="grey.500">Total Upcoming</Text>
                                            <Text textStyle="preset5bold" color="grey.900">4 ($194.98)</Text>
                                        </Flex>
                                        <Divider height="0.0625rem" />
                                        <Flex
                                            justify="space-between"
                                            align="center"
                                            flex="1 0 0"
                                        >
                                            <Text textStyle="preset5" color="secondary.red">Due Soon</Text>
                                            <Text textStyle="preset5bold" color="secondary.red">2 ($59.98)</Text>
                                        </Flex>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </GridItem>

                        <GridItem gridArea="1 / 5 / 2 / 13">
                            <Flex
                                maxW="90rem"
                                padding={theme.spacing[400]}
                                direction="column"
                                align="flex-start"
                                gap={theme.spacing[300]}
                                flex="1 0 0"
                                borderRadius={theme.spacing[150]}
                                bg="white"
                            >
                                <Flex
                                    justify="space-between"
                                    align="center"
                                    alignSelf="stretch"
                                >
                                    <Flex
                                        width="20rem"
                                        direction="column"
                                        align="flex-start"
                                        gap={theme.spacing[50]}
                                    >
                                        <InputField
                                            placeholder="Search bills"
                                            id="search"
                                            type="text"
                                            isRequired={false}
                                            icon={MagnifyingGlass}
                                            iconWeight="regular"
                                            onChange={handleSearchChange}
                                        />
                                    </Flex>

                                    <Flex align="center" gap={theme.spacing[100]}>
                                        <Text textStyle="preset4" color="grey.500">Sort by</Text>
                                        <DropdownMenu label="Latest" items={sortMenuItems} onChange={handleFilterChange} />
                                    </Flex>

                                </Flex>

                                <Flex
                                    padding={`${theme.spacing[150]} ${theme.spacing[200]}`}
                                    align="center"
                                    justify="space-between"
                                    gap={theme.spacing[400]}
                                    alignSelf="stretch"
                                    borderBottom={`1px solid ${theme.colors.grey[100]}`}
                                >
                                    <Text textStyle="preset5" color="grey.500" flex="2">Bill Title</Text>
                                    <Text textStyle="preset5" color="grey.500" flex="1">Due Date</Text>
                                    <Text textStyle="preset5" color="grey.500" textAlign="right" flex="1">Amount</Text>
                                </Flex>

                                <Flex
                                    direction="column"
                                    align="flex-start"
                                    gap={theme.spacing[250]}
                                    alignSelf="stretch"
                                >
                                    {filteredTransactions && (
                                        filteredTransactions
                                            .filter((transaction) => transaction.recurringBill === true)
                                            .map((filteredTransaction: Transaction, index: number, filteredArray) => (
                                                <React.Fragment key={filteredTransaction.id}>
                                                    <BillsListItem transaction={filteredTransaction} />
                                                    {index < filteredArray.length - 1 && (
                                                        <Divider width="100%" height="0.0625rem" />
                                                    )}
                                                </React.Fragment>
                                            ))
                                    )}
                                </Flex>
                            </Flex>
                        </GridItem>
                    </Grid>
                </>
            )}
        </MainContent>
    )
}