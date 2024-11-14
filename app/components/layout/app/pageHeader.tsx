import React, { useState } from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import { useLocation, useNavigate } from "@remix-run/react";
import { ArrowLeft } from "phosphor-react";
import { doSignOut } from "~/firebase/auth";
import useUserData from "~/hooks/useUserData";
import theme from "~/theme";
import AddNewButton from "~/components/ui/addNewButton";
import AddNewModal from "~/components/ui/addNewModal";

interface PageHeaderProps {
    children: React.ReactNode;
    openModal?: () => void;
    maxCount?: number;
    maxCountLabel?: string;
}

const PageHeader = ({ children, openModal = () => { }, maxCount, maxCountLabel }: PageHeaderProps) => {
    const location = useLocation();
    const navigate = useNavigate();
    const { loading } = useUserData();

    // Check if the user navigated from the specific link
    const cameFromLink = location.state?.fromLink;

    const formatPageTitle = (path: string) => {
        const trimmedPath = path.replace("/", "");
        const capitalizedPath = trimmedPath.charAt(0).toUpperCase() + trimmedPath.slice(1);
        return capitalizedPath.endsWith('s') ? capitalizedPath.slice(0, -1) : capitalizedPath;
    }

    const pageTitle = formatPageTitle(location.pathname);

    return (
        <>
            <Flex
                width="100%"
                justify={"space-between"}
                align="center"
            >
                <Flex align="center" gap={cameFromLink ? theme.spacing[150] : "none"}>
                    {cameFromLink && (
                        <Button variant="none" color="grey.500" onClick={() => navigate(-1)} _hover={{ color: "grey.900" }}>
                            <ArrowLeft />
                        </Button>
                    )}
                    <Text
                        as="h1"
                        textStyle="preset1"
                        color="grey.900"
                    >
                        {children}
                    </Text>
                </Flex>

                {['/transactions', '/budgets', '/pots'].includes(location.pathname) && (
                    <AddNewButton btnTag={pageTitle} onClick={() => openModal()} maxCount={maxCount} maxCountLabel={maxCountLabel} />
                )}

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
                        tabIndex={0}
                    >
                        Logout
                    </Button>
                )}
            </Flex>
        </>
    )
}

export default PageHeader;