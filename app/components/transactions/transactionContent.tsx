import React, { useState, useEffect } from "react";
import { Flex, Text, MenuItem } from "@chakra-ui/react";
import InputField from "../ui/inputField";
import DropdownMenu, { DropdownMenuItem } from "../ui/dropdownMenu";
import { CaretDown, MagnifyingGlass } from "phosphor-react";
import TransactionsList from "./transactionsList";
import { Transaction } from "~/types";
import { sortTransactions, filterTransactionsByCategory } from "~/utils/transactionFilters";
import useTransactionData from "~/hooks/useTransactions";
import theme from "~/theme";

interface TransactionContentProps {
    transactions: Transaction[];
}

const sortMenuItems: DropdownMenuItem[] = [
    { itemLabel: 'Latest', value: 'latest' },
    { itemLabel: 'Oldest', value: 'oldest' },
    { itemLabel: 'A to Z', value: 'aToZ' },
    { itemLabel: 'Z to A', value: 'zToA' },
    { itemLabel: 'Lowest', value: 'lowest' },
    { itemLabel: 'Highest', value: 'highest' },
];
const transactionMenuItems = [
    { itemLabel: "All Transactions", value: "All Transactions" },
    { itemLabel: "Entertainment", value: "Entertainment" },
    { itemLabel: "Bills", value: "Bills" },
    { itemLabel: "Income", value: "Income" },
    { itemLabel: "Groceries", value: "Groceries" },
    { itemLabel: "Dining Out", value: "Dining Out" },
    { itemLabel: "Transportation", value: "Transportation" },
    { itemLabel: "Personal Care", value: "Personal Care" },
]

const TransactionContent: React.FC<TransactionContentProps> = ({ transactions }) => {
    const [filteredTransactions, setFilteredTransactions] = useState<Transaction[]>(transactions);
    const [filter, setFilter] = useState<string>('latest');
    const [selectedCategory, setSelectedCategory] = useState<string>('All Transactions');
    const [searchTerm, setSearchTerm] = useState<string>('');

    useEffect(() => {
        if (!transactions || transactions.length === 0) {
            setFilteredTransactions([]);
            return;
        }

        const sortedTransactions = sortTransactions(transactions, filter);
        let result = filterTransactionsByCategory(sortedTransactions, selectedCategory);

        if (selectedCategory === 'All Transactions') {
            result = sortedTransactions;
        }

        if (searchTerm) {
            result = result.filter(transaction =>
                transaction.transactionName.toLowerCase().startsWith(searchTerm.toLowerCase())
            );
        }

        setFilteredTransactions(result);
    }, [transactions, filter, selectedCategory, searchTerm]);

    const handleFilterChange = (item: DropdownMenuItem) => {
        setFilter(item.value);
    };

    const handleCategoryChange = (item: DropdownMenuItem) => {
        setSelectedCategory(item.value);
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    return (
        <Flex
            maxW="90rem"
            padding={theme.spacing[400]}
            direction="column"
            align="flex-start"
            gap={theme.spacing[300]}
            alignSelf="stretch"
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
                >
                    <InputField
                        placeholder="Search transaction"
                        id="search"
                        type="text"
                        isRequired={false}
                        icon={MagnifyingGlass}
                        onChange={handleSearchChange}
                        iconWeight="regular"
                    />
                </Flex>
                <Flex
                    justify="flex-end"
                    align="center"
                    gap={theme.spacing[300]}
                >
                    <Flex align="center" gap={theme.spacing[100]}>
                        <Text textStyle="preset4" color="grey.500" width="100%">Sort by</Text>
                        <DropdownMenu label="Latest" items={sortMenuItems} onChange={handleFilterChange} />
                    </Flex>
                    <Flex align="center" gap={theme.spacing[100]}>
                        <Text textStyle="preset4" color="grey.500" width="100%">Category</Text>
                        <DropdownMenu label="All Transactions" items={transactionMenuItems} onChange={handleCategoryChange} />
                    </Flex>
                </Flex>
            </Flex>

            <Flex
                padding={theme.spacing[150]}
                align="center"
                gap={theme.spacing[400]}
                alignSelf="stretch"
                borderBottom="1px solid"
                borderBottomColor="grey.100"
            >
                <Text flex="1 0 0" textStyle="preset5" color="grey.500">Receipent/Sender</Text>
                <Text width="7.5rem" textStyle="preset5" color="grey.500">Category</Text>
                <Text width="7.5rem" textStyle="preset5" color="grey.500">Transaction Date</Text>
                <Text width="12.5rem" textStyle="preset5" color="grey.500" textAlign="right">Amount</Text>
            </Flex>
            <TransactionsList transactions={filteredTransactions} />
        </Flex>
    )
}

export default TransactionContent;