import { Button, Flex, Text, useTheme } from "@chakra-ui/react";
import { CaretRight } from "@phosphor-icons/react/dist/ssr/CaretRight";
import SummaryTitle from "./summaryTitle";
import BudgetsChart from "../budgets/budgetsChart";
import MicroSummaryTag from "./microSummaryTag";
import theme from "~/theme";
import { Budget } from "~/types";
import React from "react";

interface BudgetsSummaryProps {
    budgets: Budget[];
}

const BudgetsSummary: React.FC<BudgetsSummaryProps> = ({ budgets }) => {
    return (
        <Flex
            p={theme.spacing[400]}
            direction="column"
            align="center"
            gap={theme.spacing[250]}
            alignSelf="stretch"
            borderRadius={theme.spacing[150]}
            background="white"
            height="100%"
            flex="1 0 0"
        >
            <SummaryTitle
                title="Budgets"
                titleStyle="preset2"
                link="/budgets"
                linkText="See Details"
            />

            <Flex
                width={{
                    lg: "auto",
                    md: "auto",
                    sm: "100%",
                }}
                direction={{
                    lg: "row",
                    md: "row",
                    sm: "column",
                }}
                align="center"
                gap={theme.spacing[250]}
                alignSelf="stretch"
            >
                <Flex
                    p={`${theme.spacing[100]} 0rem`}
                    align="center"
                    gap="1rem"
                    flex="1 0 0"
                    alignSelf="stretch"
                    margin="auto"
                    justify="center"
                >
                    <BudgetsChart budgets={budgets} />
                </Flex>
                <Flex
                    direction="column"
                    justify="center"
                    align="flex-start"
                    gap={theme.spacing[200]}
                    flex="0"
                >
                    <Flex
                        direction={{
                            lg: "column",
                            md: "column",
                            sm: "row",
                        }}
                        align="flex-start"
                        gap={theme.spacing[200]}
                        alignSelf="stretch"
                        width={{
                            lg: "auto",
                            md: "auto",
                            sm: "100%",
                        }}
                    >
                        <>
                            <Flex direction={{
                                lg: "column",
                                md: "column",
                                sm: "column",
                            }}
                                gap={theme.spacing[200]}
                                width={{
                                    lg: "auto",
                                    md: "auto",
                                    sm: "100%",
                                }}
                            >
                                {budgets
                                    .sort((a, b) => b.totalSpent - a.totalSpent)
                                    .slice(0, 2)
                                    .map((savings, index) => (
                                        <MicroSummaryTag
                                            key={index}
                                            color={savings.budgetColor}
                                            label={savings.budgetCategory}
                                            amount={savings.totalSpent}
                                        />
                                    ))}
                            </Flex>
                            <Flex direction={{
                                lg: "column",
                                md: "column",
                                sm: "column",
                            }}
                                gap={theme.spacing[200]}
                                width={{
                                    lg: "auto",
                                    md: "auto",
                                    sm: "100%",
                                }}
                            >
                                {budgets
                                    .sort((a, b) => b.totalSpent - a.totalSpent)
                                    .slice(2, 4)
                                    .map((savings, index) => (
                                        <MicroSummaryTag
                                            key={index}
                                            color={savings.budgetColor}
                                            label={savings.budgetCategory}
                                            amount={savings.totalSpent}
                                        />
                                    ))}
                            </Flex>
                        </>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>

    )
}

export default BudgetsSummary;
