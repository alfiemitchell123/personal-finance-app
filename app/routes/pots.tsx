import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import MainContent from "~/components/layout/app/mainContent";
import PageHeader from "~/components/layout/app/pageHeader";
import PotCard from "~/components/pots/potCard";
import usePotsData from "~/hooks/usePots";
import { Pot } from "~/types";
import theme from "~/theme";
import PageLoading from "~/components/ui/pageLoading";
import { Protected } from "./protected";
import useModal from "~/hooks/useModal";
import PotModal from "~/components/pots/potModal";

export default function PotsRoute() {
    const { pots, loading: potsLoading } = usePotsData();
    const { isModalOpen, potModalMode, selectedItem, openAddPotModal, openEditPotModal, openDeletePotModal, openWithdrawPotModal, openAddMoneyPotModal, closeModal } = useModal();

    const selectedPot = pots?.find((pot) => pot.id === selectedItem);

    const handleEdit = (id: string) => {
        openEditPotModal(id);
    };

    const handleDelete = (id: string) => {
        openDeletePotModal(id);
    };

    const handleWithdraw = (id: string) => {
        openWithdrawPotModal(id);
    };

    const handleAddMoney = (id: string) => {
        openAddMoneyPotModal(id);
    };

    return (
        <Protected>
            <MainContent>
                {potsLoading ? (
                    <Flex
                        height="100vh"
                        width="100%"
                        align="center"
                        justify="center"
                    >
                        <PageLoading />
                    </Flex>
                ) : (
                    <>
                        <PageHeader openModal={openAddPotModal} maxCount={pots.length} maxCountLabel="pots">Pots</PageHeader>
                        {isModalOpen && (
                            <PotModal
                                mode={potModalMode}
                                isOpen={isModalOpen}
                                onClose={closeModal}
                                potId={selectedPot?.id}
                                existingPot={selectedPot}
                            />
                        )}

                        <Flex
                            maxW="90rem"
                            direction="column"
                            align="center"
                            gap={theme.spacing[300]}
                            alignSelf="stretch"
                        >
                            <SimpleGrid width="100%" columns={{ lg: 2, sm: 1 }} spacing={theme.spacing[300]}>
                                {pots && pots.length > 0 ? (
                                    pots.map((pot: Pot) => (
                                        <PotCard
                                            key={pot.id}
                                            pot={pot}
                                            onEdit={handleEdit}
                                            onDelete={handleDelete}
                                            onWithdraw={handleWithdraw}
                                            onAddMoney={handleAddMoney}
                                        />
                                    ))
                                ) : (
                                    <Flex width="100%" height="50vh" justify="center" align="center">
                                        <Text textStyle="preset4bold">Add a pot to get started.</Text>
                                    </Flex>
                                )}
                            </SimpleGrid>
                        </Flex>
                    </>
                )}
            </MainContent>
        </Protected>
    )
}