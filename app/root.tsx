// app/root.tsx

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { MetaFunction, Outlet, Links, Meta, Scripts, ScrollRestoration, useNavigate } from "@remix-run/react";
import theme from "./theme";
import { AuthProvider, useAuth } from "~/contexts/authContext/authProvider";
import AppLayout from "./components/layout/app/appLayout";
import { SidebarProvider } from "./contexts/sidebarProvider";
import { useEffect, useState } from "react";
import { Protected } from "./routes/protected";

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
export function Layout({ styles }: { styles: string }) {
  const [colorScheme, setColorScheme] = useState("light");

  useEffect(() => {
    // Fetch theme from client-specific storage or logic, e.g., localStorage
    const storedColorScheme = localStorage.getItem("theme") || "light";
    setColorScheme(storedColorScheme);
  }, []);

  return (
    <html style={{ backgroundColor: "rgb(248, 244, 240)", colorScheme: "light" }} lang="en" data-theme={colorScheme}>
      <head>
        <Meta />
        <Links />
        <style dangerouslySetInnerHTML={{ __html: styles }} />
      </head>
      <body suppressHydrationWarning>
        <AuthProvider>
          <SidebarProvider>
            <ColorModeScript />
            <ChakraProvider theme={theme}>
              <Protected>
                <AppLayout>
                  <Outlet />
                </AppLayout>
              </Protected>
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
