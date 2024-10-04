import { Box, Center, Flex, Grid, GridItem, Spinner, Button, Heading, UnorderedList, ListItem, Text, SimpleGrid, useTheme } from "@chakra-ui/react";
import useUserData from "~/hooks/useUserData";
import { doSignOut } from "~/firebase/auth";
import { useNavigate } from "@remix-run/react";
import SummaryCard from "~/components/dashboard/summaryCard";
import PotsSummary from "~/components/dashboard/potsSummary";
import BudgetSummary from "~/components/dashboard/budgetsSummary";
import TransactionsSummary from "~/components/dashboard/transactionsSummary";
import BillsSummary from "~/components/dashboard/billsSummary";
import theme from "~/theme";

export default function Home() {
  const { userData, loading, error } = useUserData();
  const navigate = useNavigate();

  // Handle the loading and error state
  if (loading) return (
    <Flex
      height="100vh"
      align="center"
      justify="center"
    >
      <Center>
        <Spinner mr={2} />
        Loading...
      </Center>
    </Flex>
  );
  if (error) return <div>{error}</div>;

  if (!userData) {
    <div>Please log in!</div>
  }

  const summaryData = [
    { label: "Current Balance", amount: userData?.currentBalance, labelColor: "white", amountColor: "white", bg: "grey.900" },
    { label: "Income", amount: userData?.income, labelColor: "grey.500", amountColor: "grey.900", bg: "white" },
    { label: "Expenses", amount: userData?.expenses, labelColor: "grey.500", amountColor: "grey.900", bg: "white" },
  ];

  return (
    <Flex
      fontFamily="sans-serif"
      width="100%"
      p={{
        sm: `${theme.spacing[300]} ${theme.spacing[200]}`,
        lg: `${theme.spacing[400]} ${theme.spacing[500]}`,
      }}
      direction="column"
      align="flex-start"
      gap={theme.spacing[400]}
    >
      <Flex
        width="100%"
        justify="space-between"
        align="center"
      >
        <Text
          textStyle={"preset1"}
          color="grey.900"
        >
          Overview
        </Text>
        <Button
          onClick={() => doSignOut().then(() => navigate("/login"))}
          isLoading={loading}
          textStyle="preset3"
          color="white"
          bg="grey.900"
          _hover={{
            bg: "grey.500"
          }}
        >
          Logout</Button>
      </Flex>

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
            amount={item.amount}
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
    </Flex>
  );
}
