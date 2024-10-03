import { Box, Flex, Text, useTheme } from "@chakra-ui/react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
    { name: "Entertainment", value: 50 },
    { name: "Bills", value: 750 },
    { name: "Dining Out", value: 75 },
    { name: "Personal Care", value: 100 },
];

const COLORS = ["#277C78", "#82C9D7", "#F2CDAC", "#626070"];

const BudgetsChart = () => {
    const theme = useTheme();

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
                    dataKey="value"
                    startAngle={90}
                    endAngle={-270}
                    style={{ outline: "none" }}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
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
                    $338
                </Text>
                <Text textStyle="preset4" color="grey.500">
                    of $975 limit
                </Text>
            </Box>
        </Flex>
    )
};

export default BudgetsChart;