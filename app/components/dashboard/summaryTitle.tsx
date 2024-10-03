import { Button, Flex, Text } from "@chakra-ui/react";
import { CaretRight } from "@phosphor-icons/react";
import React from "react";

interface SummaryTitleProps {
    title: string;
}

const SummaryTitle: React.FC<SummaryTitleProps> = ({ title }) => {
    return (
        <Flex
            align="center"
            justify="space-between"
            alignSelf="stretch"
        >
            <Text
                textStyle="preset2"
                color="grey.900"
            >
                {title}
            </Text>
            <Button
                p={0}
                variant="tertiary"
                rightIcon={<CaretRight weight="fill" />}
            >
                <Text
                    textStyle="preset4"
                    fontWeight="400"
                >
                    See Details
                </Text>
            </Button>
        </Flex>
    )
}

export default SummaryTitle;