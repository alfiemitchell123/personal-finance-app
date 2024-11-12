import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import theme from "~/theme";

interface PotButtonProps {
    children: React.ReactNode;
    onClick: (id: string) => void;
    id: string;
}

const PotButton: React.FC<PotButtonProps> = ({ children, id, onClick }) => {
    return (
        <Button
            variant="secondary"
            padding={theme.spacing[200]}
            justifyContent="center"
            alignContent="center"
            gap={theme.spacing[200]}
            flex="1 0 0"
            borderRadius={theme.spacing[100]}
            height="100%"
            onClick={() => onClick(id)}
        >
            {children}
        </Button>
    )
}

export default PotButton;