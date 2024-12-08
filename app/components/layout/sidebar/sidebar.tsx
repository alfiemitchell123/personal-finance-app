import React from "react";
import { Box, Flex, useTheme } from "@chakra-ui/react";
import SidebarMenuItem from './sidebarMenuItem';
import { House } from "@phosphor-icons/react/dist/ssr/House";
import { ArrowsDownUp } from "@phosphor-icons/react/dist/ssr/ArrowsDownUp";
import { ChartDonut } from "@phosphor-icons/react/dist/ssr/ChartDonut";
import { Jar } from "@phosphor-icons/react/dist/ssr/Jar";
import { Receipt } from "@phosphor-icons/react/dist/ssr/Receipt";
import { ArrowFatLineLeft } from "@phosphor-icons/react/dist/ssr/ArrowFatLineLeft";
import { ArrowFatLineRight } from "@phosphor-icons/react/dist/ssr/ArrowFatLineRight";
import { useSidebar } from "~/contexts/sidebarProvider";

interface SidebarProps {
    isMinimized: boolean;
    toggleSidebar: () => void;
}

const menuItems = [
    { label: "Overview", icon: <House weight="fill" size={24} />, to: "/" },
    { label: "Transactions", icon: <ArrowsDownUp weight="fill" size={24} />, to: "/transactions" },
    { label: "Budgets", icon: <ChartDonut weight="fill" size={24} />, to: "/budgets" },
    { label: "Pots", icon: <Jar weight="fill" size={24} />, to: "/pots" },
    { label: "Recurring Bills", icon: <Receipt weight="fill" size={24} />, to: "/bills" }
];

const Sidebar: React.FC<SidebarProps> = ({ isMinimized, toggleSidebar }) => {
    const theme = useTheme();
    const sidebar = useSidebar();

    return (
        <Box
            zIndex={1}
            width={{
                sm: "full",
                lg: (sidebar.isMinimized ? "5.5rem" : "18.75rem")
            }}
            as="header"
            display="flex"
            height={{
                sm: "3.5rem",
                md: "4.625rem",
                lg: "100vh"
            }}
            position="fixed"
            bottom={{ base: 0, sm: 0, md: 0, lg: 'auto' }}
            left={{ base: 0, sm: 0, md: 0, lg: 'auto' }}
            pb={{
                md: "none",
                lg: theme.spacing[300],
            }}
            flexDirection="column"
            alignItems="flex-start"
            flexShrink={0}
            gap={theme.spacing[300]}
            bg="grey.900"
            borderRadius={{
                sm: "0.5rem 0.5rem 0rem 0rem",
                lg: `0rem ${theme.spacing[200]} ${theme.spacing[200]} 0rem`,
            }}
        >
            <Flex
                display={{
                    sm: "none",
                    lg: "flex",
                }}
                direction="column"
                justify="center"
                align={sidebar.isMinimized ? "center" : "flex-start"}
                gap={theme.spacing[100]}
                alignSelf="stretch"
                p={`${theme.spacing[500]} ${theme.spacing[400]}`}
            >
                {sidebar.isMinimized ? <img src="assets/logoSmall.svg" alt="Finance" /> : <img src="assets/logoFull.svg" alt="Finance" />}
            </Flex>
            <Flex
                as="nav"
                width={
                    {
                        md: "100%",
                        lg: sidebar.isMinimized ? "5.5rem" : "18.75rem",

                    }}
                max-height="50rem"
                direction={{
                    sm: "row",
                    lg: "column",
                }}
                align="flex-start"
                gap={theme.spacing[50]}
                flex="1 0 0"
                p={{
                    md: `${theme.spacing[100]} ${theme.spacing[500]} 0rem ${theme.spacing[500]}`,
                    lg: `0rem ${theme.spacing[300]} 0rem 0rem`,
                }}
            >
                {menuItems.map((item) => (
                    <SidebarMenuItem
                        key={item.label}
                        label={item.label}
                        icon={item.icon}
                        to={item.to}
                        isMinimized={sidebar.isMinimized}
                        activeState={true}
                    />
                ))}
            </Flex>
            <Flex
                display={{
                    sm: "none",
                    lg: "flex",
                }}
                height="3.5rem"
                align="center"
                gap={theme.spacing[200]}
                shrink="0"
                alignSelf="stretch"
            >
                <SidebarMenuItem
                    label={'Minimize Menu'}
                    icon={sidebar.isMinimized ? <ArrowFatLineRight weight="fill" size={24} /> : < ArrowFatLineLeft weight="fill" size={24} />}
                    isMinimized={sidebar.isMinimized}
                    onClick={sidebar.toggleSidebar}
                    activeState={false}
                />
            </Flex>
        </Box>
    )
}

export default Sidebar;