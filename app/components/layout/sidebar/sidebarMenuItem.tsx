import { Box, Link, Text, useTheme } from "@chakra-ui/react";
import { ReactNode } from "react";
import { useLocation } from "@remix-run/react";

interface SidebarMenuItemProps {
    label: string;
    icon?: ReactNode;
    to?: string;
    isMinimized: boolean;
    onClick?: () => void;
    activeState: boolean;
}

const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({ label, icon, to, isMinimized, onClick, activeState }) => {
    const theme = useTheme();
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <Link
            onClick={onClick}
            href={to}
            display="flex"
            flexDirection={{
                md: "column",
                lg: "row",
            }}
            width={isMinimized ? "5.5rem" : "100%"}
            height="3.5rem"
            p={{
                sm: `${theme.spacing[200]} ${theme.spacing[400]}`,
                // md: `${theme.spacing[100]} 0rem ${theme.spacing[150]} 0rem`,
                lg: `${theme.spacing[200]} ${theme.spacing[400]}`,
            }}
            alignItems="center"
            justifyContent={{
                md: "center",
                lg: "start",
            }}
            gap={{
                md: theme.spacing[50],
                lg: theme.spacing[200],
            }}
            alignSelf="stretch"
            borderRadius={{
                sm: "none",
                md: "0.5rem 0.5rem 0rem 0rem",
                lg: isMinimized ? "none" : "0rem 0.75rem 0.75rem 0rem",
            }}
            color={isActive ? "grey.900" : "grey.300"}
            boxShadow={{
                sm: isActive ? `inset 0 -${theme.spacing[50]} 0 0 #277C78` : "none",
                lg: isActive ? `inset ${theme.spacing[50]} 0 0 0 #277C78` : "none",
            }}
            bg={isActive ? "beige.100" : "grey.900"}
            _hover={{
                textDecoration: "none",
                color: isActive ? "grey.900" : "grey.100"
            }}
            _active={{
                bg: activeState ? "beige.100" : "grey.900",
                boxShadow: {
                    sm: "none",
                    lg: activeState ? `inset ${theme.spacing[50]} 0 0 0 #277C78` : "none",
                },
                color: activeState ? "grey.900" : "grey.100",
            }}
        >
            {icon && <Box
                as="span"
                color={isActive ? "secondary.green" : "grey.300"}
                mr={{
                    sm: "none",
                    lg: theme.spacing[200],
                }}>{icon}</Box>}
            {
                !isMinimized &&
                <Text
                    textStyle={{
                        md: "preset5",
                        lg: "preset3",
                    }}
                    display={{
                        sm: "none",
                        md: "block",
                    }}
                    fontWeight={700}
                >{label}</Text>
            }
        </Link >
    )
}

export default SidebarMenuItem;