// app/root.tsx

import { ChakraProvider } from "@chakra-ui/react";
import { MetaFunction, Outlet, Links, Meta, Scripts, ScrollRestoration } from "@remix-run/react";
import theme from "./theme";
import { AuthProvider } from "~/contexts/authContext/authProvider";
import AppLayout from "./components/layout/app/appLayout";
import { SidebarProvider } from "./contexts/sidebarProvider";

// Meta configuration using Remix's MetaFunction
export const meta: MetaFunction = () => {
  return [
    { charset: "utf-8" },
    { title: "Finance" },
    { viewport: "width=device-width,initial-scale=1" },
  ];
};

export function links() {
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
    <html style={{ backgroundColor: "#F8F4F0" }} lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <AuthProvider>
          <SidebarProvider>
            <ChakraProvider theme={theme}>
              <AppLayout>
                <Outlet />
              </AppLayout>
              <ScrollRestoration />
              <Scripts />
            </ChakraProvider>
          </SidebarProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

// Main app entry point, can be used for route-specific content
export default function App() {
  return (
    null
  );
}
