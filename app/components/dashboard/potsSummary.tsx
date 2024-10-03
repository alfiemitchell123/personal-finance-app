import { Button, Flex, Text, SimpleGrid } from "@chakra-ui/react";
import { TipJar, CaretRight } from "@phosphor-icons/react";
import SummaryTitle from "./summaryTitle";
import MicroSummaryTag from "./microSummaryTag";
import theme from "~/theme";

const PotsSummary = () => {
    const savingsMicroData = [
        { color: "secondary.green", label: "Savings", amount: 159 },
        { color: "secondary.cyan", label: "Gift", amount: 40 },
        { color: "secondary.navy", label: "Concert Ticket", amount: 110 },
        { color: "secondary.yellow", label: "New Laptop", amount: 10 },
    ]

    return (
        <Flex
            p={theme.spacing[400]}
            direction="column"
            align="flex-start"
            gap={theme.spacing[250]}
            alignSelf="stretch"
            borderRadius={theme.spacing[150]}
            background="white"
        >
            <SummaryTitle title="Pots" />

            <Flex
                align="center"
                gap={theme.spacing[250]}
            >
                <Flex
                    width="15.4375rem"
                    height="6.875rem"
                    p={theme.spacing[200]}
                    align="center"
                    gap={theme.spacing[200]}
                    borderRadius={theme.spacing[150]}
                    bg="beige.100"
                >
                    <TipJar weight="light" width="2.5rem" height="2.5rem" fill="#277C78" />
                    <Flex
                        direction="column"
                        align="flex-start"
                        gap="0.6875rem"
                    >
                        <Text
                            textStyle="preset4"
                            color="grey.500"
                        >
                            Total Saved
                        </Text>
                        <Text
                            textStyle="preset1"
                            color="grey.900"
                        >
                            $850
                        </Text>
                    </Flex>
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
                        align="center"
                        gap={theme.spacing[200]}
                        alignSelf="stretch"
                    >
                        <SimpleGrid columns={2} spacing={4}>
                            <MicroSummaryTag color="secondary.green" label="Savings" amount={159} />
                            <MicroSummaryTag color="secondary.cyan" label="Gift" amount={40} />
                            <MicroSummaryTag color="secondary.navy" label="Concert Ticket" amount={110} />
                            <MicroSummaryTag color="secondary.yellow" label="New Laptop" amount={10} />
                        </SimpleGrid>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>

    )
}

export default PotsSummary;