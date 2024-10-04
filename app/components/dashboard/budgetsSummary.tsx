import { Button, Flex, Text, useTheme } from "@chakra-ui/react";
import { CaretRight } from "@phosphor-icons/react";
import SummaryTitle from "./summaryTitle";
import BudgetsChart from "../budgets/budgetsChart";
import MicroSummaryTag from "./microSummaryTag";
import theme from "~/theme";

const budgetsMicroData = [
    { color: "secondary.green", label: "Entertainment", amount: 50 },
    { color: "secondary.cyan", label: "Bills", amount: 750 },
    { color: "secondary.yellow", label: "Dining Out", amount: 75 },
    { color: "secondary.navy", label: "Personal Care", amount: 100 },
]

const BudgetsSummary = () => {
    return (
        <Flex
            p={theme.spacing[400]}
            direction="column"
            align="flex-start"
            gap={theme.spacing[250]}
            alignSelf="stretch"
            borderRadius={theme.spacing[150]}
            background="white"
            height="100%"
            flex="1 0 0"
        >
            <SummaryTitle title="Budgets" />

            <Flex
                align="center"
                gap={theme.spacing[250]}
            >
                <Flex
                    p={`${theme.spacing[100]} 0rem`}
                    align="center"
                    gap="1rem"
                    flex="1 0 0"
                    alignSelf="stretch"
                >
                    <BudgetsChart />
                </Flex>
                <Flex
                    direction="column"
                    justify="center"
                    align="flex-start"
                    gap={theme.spacing[200]}
                    flex="1 0 0"
                >
                    {/* <Flex
                        align="center"
                        gap={theme.spacing[200]}
                        alignSelf="stretch"
                    >
                        <>
                            {savingsMicroData.map((savings, index) => (
                                <SavingsMicro
                                    key={index}
                                    color={savings.color}
                                    label={savings.label}
                                    amount={savings.amount}
                                />
                            ))}
                        </>
                    </Flex> */}
                    <Flex
                        direction="column"
                        align="flex-start"
                        justify="center"
                        gap={theme.spacing[200]}
                    >
                        {/* <MicroSummaryTag color="secondary.green" label="Entertainment" amount={50} />
                        <MicroSummaryTag color="secondary.cyan" label="Bills" amount={750} />
                        <MicroSummaryTag color="secondary.yellow" label="Dining Out" amount={75} />
                        <MicroSummaryTag color="secondary.navy" label="Personal Care" amount={100} /> */}
                    </Flex>
                </Flex>
            </Flex>
        </Flex>

    )
}

export default BudgetsSummary;