import { useEffect, useMemo, useState } from "react";
import { Box, Button, Divider, Flex, Grid, GridItem, ListItem, Text, UnorderedList, useBreakpointValue, useMediaQuery } from "@chakra-ui/react";
import BudgetCard from "~/components/budgets/budgetCard";
import BudgetsChart from "~/components/budgets/budgetsChart";
import MainContent from "~/components/layout/app/mainContent";
import PageHeader from "~/components/layout/app/pageHeader";
import PageLoading from "~/components/ui/pageLoading";
import useBudgetsData from "~/hooks/useBudgets";
import theme from "~/theme";
import useModal from "~/hooks/useModal";
import BudgetModal from "~/components/budgets/budgetModal";
import useTransactionData from "~/hooks/useTransactions";
import { useNavigate } from "@remix-run/react";
import { Protected } from "./protected";

export default function BudgetsRoute() {
    const { budgets, loading: budgetsLoading } = useBudgetsData();
    const { transactions } = useTransactionData();
    const { isModalOpen, budgetModalMode, selectedItem, openAddBudgetModal, openEditBudgetModal, openDeleteBudgetModal, closeModal } = useModal();

    const selectedBudget = budgets?.find((budget) => budget.id === selectedItem);

    const handleEdit = (id: string) => {
        openEditBudgetModal(id);
    };

    const handleDelete = (id: string) => {
        openDeleteBudgetModal(id);
    };

    const budgetsWithTotals = useMemo(() => {
        if (!budgets || !transactions) return [];
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
            {budgetsLoading ? (
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
                    <PageHeader openModal={openAddBudgetModal} maxCount={budgets.length} maxCountLabel="budgets">Budgets</PageHeader>
                    {isModalOpen && (
                        <BudgetModal
                            mode={budgetModalMode}
                            isOpen={isModalOpen}
                            onClose={closeModal}
                            budgetId={selectedBudget?.id}
                            existingBudget={selectedBudget}
                        />
                    )}

                    <Flex
                        width="100%"
                        direction={{ lg: "row", sm: "column" }}
                        maxW="90rem"
                        align="flex-start"
                        gap={theme.spacing[300]}
                        alignSelf="stretch"
                    >
                        <Flex
                            width={{
                                lg: "26.75rem",
                                sm: "100%",
                            }}
                            height="100%"
                            padding={theme.spacing[400]}
                            direction={{
                                lg: "column",
                                md: "row",
                                sm: "column",
                            }}
                            align={{
                                lg: "flex-start",
                                sm: "center"
                            }}
                            gap={theme.spacing[400]}
                            alignSelf="stretch"
                            borderRadius={theme.spacing[150]}
                            bg="white"
                        >
                            <Flex width="100%" justify="center" align="center">
                                <BudgetsChart budgets={budgetsWithTotals} />
                            </Flex>

                            <Flex
                                height="100%"
                                direction="column"
                                align="flex-start"
                                gap={theme.spacing[300]}
                                alignSelf="stretch"
                                width="100%"
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
                                        budgetsWithTotals
                                            .map((budget, index) => (
                                                <Flex key={budget.id} width="100%" direction="column" gap={theme.spacing[200]}>
                                                    <ListItem
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
                                                    {index < budgetsWithTotals.length - 1 && <Divider orientation="horizontal" height="0.0625rem" />}
                                                </Flex>
                                            ))
                                    ) : (
                                        <Text textStyle="preset4">Add a budget to get started.</Text>
                                    )}
                                </UnorderedList>
                            </Flex>
                        </Flex>
                        <Flex
                            direction="column"
                            align="flex-start"
                            gap={theme.spacing[300]}
                            flex="1 0 0"
                            width="100%"
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
                    </Flex>
                </>
            )}
        </MainContent>
    )
}