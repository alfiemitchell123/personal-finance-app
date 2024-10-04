import { Button, Flex, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { CaretRight } from "@phosphor-icons/react";
import React from "react";

interface SummaryTitleProps {
    title: string;
    link: string;
}

const SummaryTitle: React.FC<SummaryTitleProps> = ({ title, link }) => {
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
            <Link to={link} as={RouterLink} state={{ fromLink: true }} _hover={{ textDecoration: "none" }}>
                <Button p={0} variant="tertiary" rightIcon={<CaretRight weight="fill" />}>
                    <Text
                        textStyle="preset4"
                        fontWeight="400"
                    >
                        See Details
                    </Text>
                </Button>
            </Link>
        </Flex>
    )
}

export default SummaryTitle;