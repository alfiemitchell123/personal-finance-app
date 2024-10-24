import { Flex, Grid, GridItem } from "@chakra-ui/react";
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

export default function Home() {
  const { userData, loading, error } = useUserData();

  // Handle the loading and error state
  if (loading) return (
    <PageLoading />
  );
  if (error) return <div>{error}</div>;

  if (!userData) return (
    <div>Please log in!</div>
  );

  const summaryData = [
    { label: "Current Balance", amount: userData?.currentBalance, labelColor: "white", amountColor: "white", bg: "grey.900" },
    { label: "Income", amount: userData?.income, labelColor: "grey.500", amountColor: "grey.900", bg: "white" },
    { label: "Expenses", amount: userData?.expenses, labelColor: "grey.500", amountColor: "grey.900", bg: "white" },
  ];

  return (
    <MainContent>
      <PageHeader>
        Overview
      </PageHeader>

      <Flex
        align="flex-start"
        alignSelf="stretch"
        gap={theme.spacing[300]}
        maxWidth="90rem"
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
        wrap="wrap"
        maxW="90rem"
        width="100%"
        gap={theme.spacing[300]}
      >
        <Flex
          width="38rem"
          direction="column"
          align="flex-start"
          gap={theme.spacing[300]}
        >
          <PotsSummary />
          <TransactionsSummary />
        </Flex>
        <Flex
          direction="column"
          align="flex-start"
          gap={theme.spacing[300]}
          flex="1 0 0"
        >
          <BudgetSummary />
          <BillsSummary />
        </Flex>
      </Flex>
    </MainContent>
  );
}
