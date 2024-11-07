import { useState, ReactNode } from "react";
import { Box } from "@chakra-ui/react";
import Sidebar from "../sidebar/sidebar";
import { useLocation } from "@remix-run/react";
import useUserData from "~/hooks/useUserData";
import PageLoading from "~/components/ui/pageLoading";
import { useSidebar } from "~/contexts/sidebarProvider";
import theme from "~/theme";

interface AppLayoutProps {
    children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
    const location = useLocation();

    const noAppLayoutRoutes = ["/login", "/register"];
    const useAppLayout = !noAppLayoutRoutes.includes(location.pathname);

    const sidebar = useSidebar();

    return (
        <Box>
            {useAppLayout ?
                <>
                    <Box
                        display="flex"
                        bg="beige.100"
                        minHeight="100%"
                    >
                        <Sidebar isMinimized={sidebar.isMinimized} toggleSidebar={sidebar.toggleSidebar} />

                        <Box
                            width="100%"
                            ml={{
                                lg: sidebar.isMinimized ? "5.5rem" : "18.75rem",
                                md: "0",
                                sm: "0",
                            }}
                            mb={{
                                lg: "0",
                                md: "5rem",
                                sm: "4rem",
                            }}
                        >
                            {children}
                        </Box>
                    </Box>
                </>
                :
                <>
                    {children}
                </>
            }
        </Box>
    )
}

export default AppLayout;