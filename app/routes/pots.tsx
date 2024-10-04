import { Button, Flex, Text, SimpleGrid } from "@chakra-ui/react";
import MainContent from "~/components/layout/app/mainContent";
import PageHeader from "~/components/layout/app/pageHeader";
import PotCard from "~/components/pots/potCard";
import { ArrowLeft } from "phosphor-react";
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
        <MainContent>
            <PageHeader>Pots</PageHeader>
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
        </MainContent>
    )
}