import { Flex, Text, SimpleGrid } from "@chakra-ui/react";
import PotCard from "~/components/pots/potCard";
import usePotsData from "~/hooks/usePots";
import { Pot } from "~/types";
import theme from "~/theme";

export default function PotsRoute() {
    const { pots, loading, error } = usePotsData();

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>{error}</div>;
    }

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
                    textStyle="preset1"
                    color="grey.900"
                >
                    Pots
                </Text>
            </Flex>
            <Flex
                maxW="90rem"
                direction="column"
                align="center"
                gap={theme.spacing[300]}
                alignSelf="stretch"
            >
                <SimpleGrid width="100%" columns={2} spacing={theme.spacing[300]}>
                    {pots.map((pot: Pot) => (
                        <PotCard key={pot.id} pot={pot} />
                    ))}
                </SimpleGrid>
            </Flex>
        </Flex>
    )
}