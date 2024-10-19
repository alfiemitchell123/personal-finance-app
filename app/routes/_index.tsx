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

      <Grid
        templateColumns="repeat(12, 1fr)"
        templateRows="repeat(8, 1fr)"
        gap={theme.spacing[300]}
        width="100%"
      >
        <GridItem gridArea="1 / 1 / 4 / 8">
          <PotsSummary />
        </GridItem>
        <GridItem gridArea="1 / 8 / 6 / 13">
          <BudgetSummary />
        </GridItem>
        <GridItem gridArea="4 / 1 / 9 / 8">
          <TransactionsSummary />
        </GridItem>
        <GridItem gridArea="6 / 8 / 9 / 13">
          <BillsSummary />
        </GridItem>
      </Grid>
    </MainContent>
  );
}
