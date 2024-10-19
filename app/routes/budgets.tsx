import { Box, Flex, Grid, GridItem, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import BudgetCard from "~/components/budgets/budgetCard";
import BudgetsChart from "~/components/budgets/budgetsChart";
import MainContent from "~/components/layout/app/mainContent";
import PageHeader from "~/components/layout/app/pageHeader";
import PageLoading from "~/components/ui/pageLoading";
import useBudgetsData from "~/hooks/useBudgets";
import theme from "~/theme";

export default function BudgetsRoute() {
    const { budgets, loading, error } = useBudgetsData();

    if (loading) {
        return <PageLoading />;
    }
    if (error) {
        return <div>{error}</div>;
    }

    return (
        <MainContent>
            <PageHeader>Budgets</PageHeader>

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
                            <BudgetsChart />
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
                                {budgets && budgets.length > 0 ? (
                                    budgets.map((budget) => (
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
                                                    $15.00
                                                </Text>
                                                <Text textStyle="preset5" color="grey.500">
                                                    of ${budget.maxSpend.toFixed(2)}
                                                </Text>
                                            </Flex>
                                        </ListItem>
                                    ))
                                ) : (
                                    <Text>No budgets available</Text>
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
                        {budgets && budgets.length > 0 ? (
                            budgets.map((budget) => (
                                <BudgetCard key={budget.id} budget={budget} />
                            ))
                        ) : (
                            <Text>No budgets available</Text>
                        )}
                    </Flex>
                </GridItem>
            </Grid>
        </MainContent>
    )
}