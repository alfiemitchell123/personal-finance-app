import { Button, Flex, Text, SimpleGrid } from "@chakra-ui/react";
import { TipJar } from "@phosphor-icons/react/dist/ssr/TipJar";
import SummaryTitle from "./summaryTitle";
import MicroSummaryTag from "./microSummaryTag";
import usePotsData from "~/hooks/usePots";
import { Pot } from "~/types";
import theme from "~/theme";

const PotsSummary = () => {
    const { pots, loading, error } = usePotsData();

    if (loading) {
        return <div>Loading pots...</div>; // or a spinner
    }

    if (error) {
        return <div>{error}</div>;
    }

    const totalSavedAllPots = pots.reduce((accumulator: number, pot: Pot) => {
        return accumulator + (pot.totalSaved || 0);
    }, 0);

    // Limit pots to the specified amount
    const displayedPots = pots
        ?.slice(0, 4)
        .sort((a, b) => (b.totalSaved || 0) - (a.totalSaved || 0));

    return (
        <Flex
            height="50%"
            p={theme.spacing[400]}
            direction="column"
            align="flex-start"
            gap={theme.spacing[250]}
            alignSelf="stretch"
            borderRadius={theme.spacing[150]}
            background="white"
        >
            <SummaryTitle
                title="Pots"
                titleStyle="preset2"
                link="/pots"
                linkText="See Details"
            />
            {pots ? (
                <Flex
                    width="100%"
                    direction={{
                        lg: "row",
                        md: "row",
                        sm: "column",
                    }}
                    align="center"
                    gap={theme.spacing[250]}
                >
                    <Flex
                        width={{
                            lg: "15.4375rem",
                            md: "15.4375rem",
                            sm: "100%",
                        }}
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
                                ${totalSavedAllPots.toFixed(0)}
                            </Text>
                        </Flex>
                    </Flex>
                    <Flex
                        width="100%"
                        direction="column"
                        justify="center"
                        align="flex-start"
                        gap={theme.spacing[200]}
                        flex="1 0 0"
                    >
                        <Flex
                            align="center"
                            gap={theme.spacing[200]}
                            alignSelf="stretch"
                        >
                            <Flex
                                direction="column"
                                justify="center"
                                align="flex-start"
                                gap={theme.spacing[200]}
                                flex="1 0 0"
                            >
                                <Flex align="center" gap={theme.spacing[200]} alignSelf="stretch">
                                    {displayedPots.slice(0, 2).map((pot: Pot) => (
                                        <MicroSummaryTag
                                            key={pot.id}
                                            pot={pot}
                                            color={pot.potColor}
                                            label={pot.potName}
                                            amount={pot.totalSaved}
                                        />
                                    ))}
                                </Flex>
                                <Flex align="center" gap={theme.spacing[200]} alignSelf="stretch">
                                    {displayedPots.slice(2, 4).map((pot: Pot) => (
                                        <MicroSummaryTag
                                            key={pot.id}
                                            pot={pot}
                                            color={pot.potColor}
                                            label={pot.potName}
                                            amount={pot.totalSaved}
                                        />
                                    ))}
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            ) : (
                <Flex
                    width="100%"
                    justify="center"
                    align="center"
                    direction="column"
                    mt={theme.spacing[500]}
                >
                    <Text textStyle="preset4">
                        Add pots to get started.
                    </Text>
                </Flex>
            )}

        </Flex>

    )
}

export default PotsSummary;