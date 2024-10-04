import React from "react";
import { Flex } from "@chakra-ui/react";
import theme from "~/theme";

interface MainContentProps {
    children: React.ReactNode;
}

const MainContent = ({ children }: MainContentProps) => {
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
            {children}
        </Flex>
    )
}

export default MainContent;