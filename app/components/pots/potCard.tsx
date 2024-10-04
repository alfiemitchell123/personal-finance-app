import { Flex } from "@chakra-ui/react";
import PotTitle from "./potTitle";
import PotChart from "./potChart";
import PotButton from "./potButton";
import { Pot } from "~/types";
import theme from "~/theme";
import React from "react";

interface PotCardProps {
    pot: Pot;
}

const PotCard: React.FC<PotCardProps> = ({ pot }) => {
    const percentageSaved = (pot.totalSaved / pot.targetAmt) * 100;

    return (
        <Flex
            padding={theme.spacing[300]}
            direction="column"
            align="flex-start"
            gap={theme.spacing[400]}
            flex="1 0 0"
            borderRadius={theme.spacing[150]}
            bg="white"
            key={pot.id}
        >
            <PotTitle fill={pot.potColor} potName={pot.potName} />
            <PotChart totalSaved={pot.totalSaved} percentage={percentageSaved.toFixed(1)} targetAmt={pot.targetAmt} barColor={pot.potColor} barAmt={`${percentageSaved}%`} />

            <Flex
                align="flex-start"
                gap={theme.spacing[200]}
                alignSelf="stretch"
            >
                <PotButton>+ Add Money</PotButton>
                <PotButton>Withdraw</PotButton>
            </Flex>
        </Flex>
    )
}

export default PotCard;