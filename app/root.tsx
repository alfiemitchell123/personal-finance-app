// app/root.tsx

import { Box, ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { MetaFunction, Outlet, Links, Meta, Scripts, ScrollRestoration, useNavigate } from "@remix-run/react";
import theme from "./theme";
import { AuthProvider, useAuth } from "~/contexts/authContext/authProvider";
import AppLayout from "./components/layout/app/appLayout";
import { SidebarProvider } from "./contexts/sidebarProvider";
import { Protected } from "./routes/protected";
import { LinksFunction } from "@remix-run/node";

// Meta configuration using Remix's MetaFunction
export const meta: MetaFunction = () => {
  return [
    { charset: "utf-8" },
    { title: "Finance" },
    { viewport: "width=device-width,initial-scale=1" },
  ];
};

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;700&display=swap",
    },
  ];
}

// Layout component that provides the main HTML structure
export function Layout() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      </head>
      <Box as="body">
        <ChakraProvider theme={theme}>
          <AuthProvider>
            <SidebarProvider>
              <Protected>
                <AppLayout>
                  <Outlet />
                </AppLayout>
              </Protected>
              <ScrollRestoration />
              <Scripts />
            </SidebarProvider>
          </AuthProvider>
        </ChakraProvider>
      </Box>
    </html>
  );
}

// Main app entry point, can be used for route-specific content
export default function App() {
  return (
    <Outlet />
  );
}
