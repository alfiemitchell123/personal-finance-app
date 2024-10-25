import { Flex, SimpleGrid } from "@chakra-ui/react";
import MainContent from "~/components/layout/app/mainContent";
import PageHeader from "~/components/layout/app/pageHeader";
import PotCard from "~/components/pots/potCard";
import usePotsData from "~/hooks/usePots";
import { Pot } from "~/types";
import theme from "~/theme";
import PageLoading from "~/components/ui/pageLoading";
import { Protected } from "./protected";

export default function PotsRoute() {
    const { pots, loading, error } = usePotsData();

    if (loading) {
        return <PageLoading />;
    }
    if (error) {
        return <div>{error}</div>;
    }

    return (
        <Protected>
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
        </Protected>
    )
}