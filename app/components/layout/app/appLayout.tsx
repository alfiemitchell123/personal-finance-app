import { useState, ReactNode } from "react";
import { Box } from "@chakra-ui/react";
import Sidebar from "../sidebar/sidebar";
import { useLocation } from "@remix-run/react";
import useUserData from "~/hooks/useUserData";
import PageLoading from "~/components/ui/pageLoading";

interface AppLayoutProps {
    children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
    const location = useLocation();

    const noAppLayoutRoutes = ["/login", "/register"];
    const useAppLayout = !noAppLayoutRoutes.includes(location.pathname);

    const [isMinimized, setIsMinimized] = useState<boolean>(false);

    const toggleSidebar = () => {
        setIsMinimized(!isMinimized);
    }

    return (
        <Box>
            {useAppLayout ?
                <>
                    <Box
                        display="flex"
                        bg="beige.100"
                        minHeight="100%"
                    >
                        <Sidebar isMinimized={isMinimized} toggleSidebar={toggleSidebar} />

                        <Box
                            width="100%"
                            ml={isMinimized ? "5.5rem" : "18.75rem"}
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