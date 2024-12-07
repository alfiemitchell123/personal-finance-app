import { useEffect, useMemo } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import useBudgetsData from "~/hooks/useBudgets";
import theme from "~/theme";
import { Budget } from "~/types";

interface BudgetsChartProps {
    budgets: Budget[];
}

const BudgetsChart: React.FC<BudgetsChartProps> = ({ budgets }) => {
    const data = useMemo(() => {
        return budgets.map(budget => ({
            category: budget.budgetCategory,
            totalSpent: budget.totalSpent,
            maxSpend: budget.maxSpend,
            color: budget.budgetColor || "#8884d8",
        }));
    }, [budgets]);

    const overallSpent = useMemo(() => {
        return budgets.reduce((sum, budget) => sum + budget.totalSpent, 0);
    }, [budgets]);

    const overallMaxLimit = useMemo(() => {
        return budgets.reduce((sum, budget) => sum + budget.maxSpend, 0);
    }, [budgets]);

    return (
        <Flex
            position="relative"
            maxW="15rem"
            maxH="15rem"
            direction="column"
            justify="center"
            align="center"
            gap="0.5rem"
            flex="1 0 0"
        >
            <PieChart width={240} height={240}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={120}
                    fill="#8884d8"
                    stroke="none"
                    dataKey="totalSpent"
                    startAngle={90}
                    endAngle={-270}
                    style={{ outline: "none" }}
                    rootTabIndex={-1}
                >
                    {data && data.length > 0 && (
                        data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))
                    )}
                </Pie>
            </PieChart>

            <Box
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                display="inline-flex"
                flexDirection="column"
                alignItems="center"
                gap={theme.spacing[100]}
            >
                <Text textStyle="preset1" color="grey.900">
                    ${Math.floor(overallSpent)}
                </Text>
                <Text textStyle="preset4" color="grey.500">
                    of ${overallMaxLimit} limit
                </Text>
            </Box>
        </Flex>
    )
};

export default BudgetsChart;