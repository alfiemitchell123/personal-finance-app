import { useEffect, useMemo, useState } from "react";
import { Box, Button, Flex, Grid, GridItem, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import BudgetCard from "~/components/budgets/budgetCard";
import BudgetsChart from "~/components/budgets/budgetsChart";
import MainContent from "~/components/layout/app/mainContent";
import PageHeader from "~/components/layout/app/pageHeader";
import PageLoading from "~/components/ui/pageLoading";
import useBudgetsData from "~/hooks/useBudgets";
import theme from "~/theme";
import AddNewModal from "~/components/ui/addNewModal";
import InputField from "~/components/ui/inputField";
import DropdownMenu from "~/components/ui/dropdownMenu";
import useModal from "~/hooks/useModal";
import BudgetModal from "~/components/budgets/budgetModal";
import useTransactionData from "~/hooks/useTransactions";

export default function BudgetsRoute() {
    const { budgets, loading, error } = useBudgetsData();
    const { transactions } = useTransactionData();
    const { isModalOpen, modalMode, selectedItem, openAddModal, openEditModal, openDeleteModal, closeModal } = useModal();

    const selectedBudget = budgets?.find((budget) => budget.id === selectedItem);

    useEffect(() => {
        console.log("selectedItem:", selectedItem);
        console.log("selectedBudget:", selectedBudget);
        console.log("budgets:", budgets);
    }, [selectedItem, selectedBudget, budgets]);

    const handleEdit = (id: string) => {
        console.log("Editing budget with id: ", id);
        openEditModal(id);
    };

    const handleDelete = (id: string) => {
        openDeleteModal(id);
    };

    const budgetsWithTotals = useMemo(() => {
        return budgets.map(budget => {
            const budgetTransactions = transactions.filter(transaction => transaction.transactionCategory === budget.budgetCategory && transaction.transactionAmt < 0);
            const totalSpent = budgetTransactions.reduce((sum, transaction) => sum + Math.abs(transaction.transactionAmt), 0);
            const totalRemaining = budget.maxSpend - totalSpent;

            return {
                ...budget,
                totalSpent,
                totalRemaining,
                budgetColor: budget.budgetColor,
            };
        });
    }, [budgets, transactions]);

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
                    <PageHeader openModal={openAddModal}>Budgets</PageHeader>
                    {isModalOpen && (
                        <BudgetModal
                            mode={modalMode}
                            isOpen={isModalOpen}
                            onClose={closeModal}
                            budgetId={selectedBudget?.id}
                            existingBudget={selectedBudget}
                        />
                    )}

                    <Grid width="100%" templateColumns="repeat(12, 1fr)" templateRows="1fr" gap={theme.spacing[300]}>
                        <GridItem gridArea="1 / 1 / 2 / 6">
                            <Flex
                                padding={theme.spacing[400]}
                                direction="column"
                                align="flex-start"
                                gap={theme.spacing[400]}
                                alignSelf="stretch"
                                borderRadius={theme.spacing[150]}
                                bg="white"
                            >
                                <Flex width="100%" justify="center" align="center">
                                    <BudgetsChart budgets={budgetsWithTotals} />
                                </Flex>
                                <Flex
                                    direction="column"
                                    align="flex-start"
                                    gap={theme.spacing[300]}
                                    alignSelf="stretch"
                                >
                                    <Text textStyle="preset2" color="grey.900">
                                        Spending Summary
                                    </Text>
                                    <UnorderedList
                                        m={0}
                                        listStyleType="none"
                                        display="flex"
                                        flexDirection="column"
                                        alignItems="flex-start"
                                        gap={theme.spacing[200]}
                                        alignSelf="stretch"
                                    >
                                        {budgetsWithTotals && budgetsWithTotals.length > 0 ? (
                                            budgetsWithTotals.map((budget) => (
                                                <ListItem
                                                    key={budget.id}
                                                    display="flex"
                                                    justifyContent="space-between"
                                                    alignItems="center"
                                                    alignSelf="stretch"
                                                >
                                                    <Flex
                                                        align="center"
                                                        gap={theme.spacing[200]}
                                                        flex="1 0 0"
                                                        alignSelf="stretch"
                                                    >
                                                        <Box
                                                            width={theme.spacing[50]}
                                                            alignSelf="stretch"
                                                            borderRadius={theme.spacing[100]}
                                                            bg={budget.budgetColor}
                                                        />
                                                        <Text textStyle="preset4" color="grey.500">
                                                            {budget.budgetCategory}
                                                        </Text>
                                                    </Flex>
                                                    <Flex
                                                        height="1.1875rem"
                                                        justify="center"
                                                        align="center"
                                                        gap={theme.spacing[100]}
                                                    >
                                                        <Text textStyle="preset3" color="grey.900">
                                                            ${budget.totalSpent.toFixed(2)}
                                                        </Text>
                                                        <Text textStyle="preset5" color="grey.500">
                                                            of ${budget.maxSpend.toFixed(2)}
                                                        </Text>
                                                    </Flex>
                                                </ListItem>
                                            ))
                                        ) : (
                                            <Text textStyle="preset4">Add a budget to get started.</Text>
                                        )}
                                    </UnorderedList>
                                </Flex>
                            </Flex>
                        </GridItem>

                        <GridItem gridArea="1 / 6 / 2 / 13">
                            <Flex
                                direction="column"
                                align="flex-start"
                                gap={theme.spacing[300]}
                                flex="1 0 0"
                            >
                                {budgetsWithTotals && budgetsWithTotals.length > 0 ? (
                                    budgetsWithTotals.map((budget) => (
                                        <BudgetCard
                                            key={budget.id}
                                            budget={budget}
                                            onEdit={handleEdit}
                                            onDelete={handleDelete}
                                        />
                                    ))
                                ) : (
                                    <Flex width="100%" height="50vh" justify="center" align="center">
                                        <Text textStyle="preset4bold">Add a budget to get started.</Text>
                                    </Flex>
                                )}
                            </Flex>
                        </GridItem>
                    </Grid>
                </>
            )}
        </MainContent>
    )
}