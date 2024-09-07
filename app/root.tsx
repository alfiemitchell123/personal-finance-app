// app/root.tsx

import { ChakraProvider } from "@chakra-ui/react";
import { json, MetaFunction, Outlet, Links, LiveReload, Meta, Scripts, ScrollRestoration, useLoaderData } from "@remix-run/react";
import theme from "./theme";
import { LoaderFunction } from "@remix-run/node";
import { AuthProvider } from "~/contexts/authContext";

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
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <AuthProvider>
          <ChakraProvider theme={theme}>
            <Outlet />
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
  return <Outlet />;
}
