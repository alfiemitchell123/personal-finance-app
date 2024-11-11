import { useEffect, useMemo, useState } from "react";
import { Flex } from "@chakra-ui/react";
import useUserData from "~/hooks/useUserData";
import MainContent from "~/components/layout/app/mainContent";
import PageHeader from "~/components/layout/app/pageHeader";
import PageLoading from "~/components/ui/pageLoading";
import SummaryCard from "~/components/dashboard/summaryCard";
import PotsSummary from "~/components/dashboard/potsSummary";
import BudgetSummary from "~/components/dashboard/budgetsSummary";
import TransactionsSummary from "~/components/dashboard/transactionsSummary";
import BillsSummary from "~/components/dashboard/billsSummary";
import theme from "~/theme";
import useBudgetsData from "~/hooks/useBudgets";
import useTransactionData from "~/hooks/useTransactions";
import { Protected } from "./protected";

export default function Home() {
  const { budgets } = useBudgetsData();
  const { loading, error } = useUserData();
  const { transactions } = useTransactionData();

  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [currentBalance, setCurrentBalance] = useState(0);

  const budgetsWithTotals = useMemo(() => {
    return budgets.map(budget => {
      const budgetTransactions = transactions.filter(transaction =>
        transaction.transactionCategory === budget.budgetCategory && transaction.transactionAmt < 0);
      const totalSpent = budgetTransactions.reduce((sum, transaction) => sum + Math.abs(transaction.transactionAmt), 0);
      const totalRemaining = budget.maxSpend - totalSpent;

      return {
        ...budget,
        totalSpent,
        totalRemaining,
      };
    });
  }, [budgets, transactions]);

  useEffect(() => {
    const income = transactions
      .filter(transaction => transaction.transactionAmt > 0)
      .reduce((sum, transaction) => sum + transaction.transactionAmt, 0);

    const expenses = transactions
      .filter(transaction => transaction.transactionAmt < 0)
      .reduce((sum, transaction) => sum + Math.abs(transaction.transactionAmt), 0);

    const currentBalance = income - expenses;

    setTotalIncome(income);
    setTotalExpenses(expenses);
    setCurrentBalance(currentBalance);
  }, [transactions]);

  // Handle the loading and error state
  if (loading) return (
    <PageLoading />
  );
  if (error) return <div>{error}</div>;

  const summaryData = [
    { label: "Current Balance", amount: currentBalance, labelColor: "white", amountColor: "white", bg: "grey.900" },
    { label: "Income", amount: totalIncome, labelColor: "grey.500", amountColor: "grey.900", bg: "white" },
    { label: "Expenses", amount: totalExpenses, labelColor: "grey.500", amountColor: "grey.900", bg: "white" },
  ];

  return (
    <Protected>
      <MainContent>
        <PageHeader>
          Overview
        </PageHeader>

        <Flex
          direction={{
            lg: "row",
            md: "row",
            sm: "column",
          }}
          align="flex-start"
          alignSelf="stretch"
          gap={{
            lg: theme.spacing[300],
            md: theme.spacing[300],
            sm: theme.spacing[150],
          }}
          maxWidth={{
            lg: "90rem",
            md: "90rem",
            sm: "90rem",
          }}
        >
          {summaryData.map((item, index) => (
            <SummaryCard
              key={index}
              label={item.label}
              amount={item.amount ?? 0}
              labelColor={item.labelColor}
              amountColor={item.amountColor}
              bg={item.bg}
            />
          ))}
        </Flex>

        <Flex
          direction={{
            lg: "row",
            md: "column",
            sm: "column",
          }}
          maxWidth={{
            lg: "90rem",
            sm: "100%",
          }}
          width="100%"
          gap={theme.spacing[300]}
        >
          <Flex
            width={{
              lg: "38rem",
              md: "100%",
              sm: "100%",
            }}
            direction="column"
            align="flex-start"
            gap={theme.spacing[300]}
          >
            <PotsSummary />
            <TransactionsSummary />
          </Flex>
          <Flex
            height={{
              lg: "auto",
              md: "47.5625rem",
              sm: "55.5625rem",
            }}
            direction="column"
            align="flex-start"
            gap={theme.spacing[300]}
            flex="1 0 0"
          >
            <BudgetSummary budgets={budgetsWithTotals} />
            <BillsSummary />
          </Flex>
        </Flex>
      </MainContent>
    </Protected>
  );
}
