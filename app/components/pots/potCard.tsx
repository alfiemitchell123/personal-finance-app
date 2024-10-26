import { Flex } from "@chakra-ui/react";
import PotTitle from "./potTitle";
import PotChart from "./potChart";
import PotButton from "./potButton";
import { Pot } from "~/types";
import theme from "~/theme";
import React from "react";

interface PotCardProps {
    pot: Pot;
    onEdit: (id: string) => void;
    onDelete: (id: string) => void;
    onWithdraw: (id: string) => void;
    onAddMoney: (id: string) => void;
}

const PotCard: React.FC<PotCardProps> = ({ pot, onEdit, onDelete, onWithdraw, onAddMoney }) => {
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
            <PotTitle
                onEdit={() => onEdit(pot.id)}
                onDelete={() => onDelete(pot.id)}
                fill={pot.potColor}
                potName={pot.potName}
            />
            <PotChart totalSaved={pot.totalSaved} percentage={percentageSaved.toFixed(1)} targetAmt={pot.targetAmt} barColor={pot.potColor} barAmt={`${percentageSaved}%`} />

            <Flex
                align="flex-start"
                gap={theme.spacing[200]}
                alignSelf="stretch"
            >
                <PotButton id={pot.id} onClick={onAddMoney}>+ Add Money</PotButton>
                <PotButton id={pot.id} onClick={onWithdraw}>Withdraw</PotButton>
            </Flex>
        </Flex>
    )
}

export default PotCard;