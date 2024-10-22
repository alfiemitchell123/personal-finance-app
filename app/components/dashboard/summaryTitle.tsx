import { Button, Flex, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { CaretRight } from "@phosphor-icons/react";
import React from "react";

interface SummaryTitleProps {
    title: string;
    link: string;
    linkText: string;
    titleStyle: string;
}

const SummaryTitle: React.FC<SummaryTitleProps> = ({ title, link, linkText, titleStyle }) => {
    return (
        <Flex
            align="center"
            justify="space-between"
            alignSelf="stretch"
        >
            <Text
                textStyle={titleStyle}
                color="grey.900"
            >
                {title}
            </Text>
            <Link to={link} as={RouterLink} state={{ fromLink: true }} _hover={{ textDecoration: "none" }}>
                <Button
                    p={0}
                    variant="tertiary"
                    background="none"
                    rightIcon={<CaretRight weight="fill" />}
                >
                    <Text
                        textStyle="preset4"
                        fontWeight="400"
                    >
                        {linkText}
                    </Text>
                </Button>
            </Link>
        </Flex>
    )
}

export default SummaryTitle;