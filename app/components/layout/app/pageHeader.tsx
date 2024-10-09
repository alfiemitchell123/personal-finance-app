import React from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import { useLocation, useNavigate } from "@remix-run/react";
import { ArrowLeft } from "phosphor-react";
import { doSignOut } from "~/firebase/auth";
import useUserData from "~/hooks/useUserData";
import theme from "~/theme";

interface PageHeaderProps {
    children: React.ReactNode;
}

const PageHeader = ({ children }: PageHeaderProps) => {
    const location = useLocation();
    const navigate = useNavigate();

    const { loading } = useUserData();

    // Check if the user navigated from the specific link
    const cameFromLink = location.state?.fromLink;

    return (
        <Flex
            width="100%"
            justify={cameFromLink ? "none" : "space-between"}
            gap={cameFromLink ? theme.spacing[150] : "none"}
            align="center"
        >
            {cameFromLink && (
                <Button variant="none" color="grey.500" onClick={() => navigate(-1)} _hover={{ color: "grey.900" }}>
                    <ArrowLeft />
                </Button>
            )}
            <Text
                textStyle="preset1"
                color="grey.900"
            >
                {children}
            </Text>
            {location.pathname === "/" && (
                <Button
                    onClick={() => doSignOut().then(() => navigate("/login"))}
                    isLoading={loading}
                    textStyle="preset3"
                    color="white"
                    bg="grey.900"
                    _hover={{
                        bg: "grey.500"
                    }}
                >
                    Logout
                </Button>
            )}
        </Flex>
    )
}

export default PageHeader;