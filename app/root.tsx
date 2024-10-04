// app/root.tsx

import { useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { json, MetaFunction, Outlet, Links, LiveReload, Meta, Scripts, ScrollRestoration, useLoaderData } from "@remix-run/react";
import theme from "./theme";
import { AuthProvider } from "~/contexts/authContext";
import AppLayout from "./components/layout/app/appLayout";
import useUserData from "./hooks/useUserData";
import { useNavigate } from "@remix-run/react";

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
  const { userData, loading } = useUserData();
  const navigate = useNavigate();

  useEffect(() => {
    // If the user data isn't available and we're not loading, redirect to login
    if (!userData && !loading) {
      navigate("/login");
    }
  }, [userData, navigate]);

  return (
    <html style={{ backgroundColor: "#F8F4F0" }} lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <AuthProvider>
          <ChakraProvider theme={theme}>
            <AppLayout>
              <Outlet />
            </AppLayout>
            <ScrollRestoration />
            <Scripts />
          </ChakraProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

// Main app entry point, can be used for route-specific content
export default function App() {
  return (
    <Outlet />
  );
}
