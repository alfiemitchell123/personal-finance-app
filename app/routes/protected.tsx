import { useNavigate } from "@remix-run/react";
import React, { useContext, useEffect } from "react";
import PageLoading from "~/components/ui/pageLoading";
import { useAuth } from "~/contexts/authContext/authProvider";

type ProtectedProps = {
    children: React.ReactNode;
}

export function Protected({ children }: ProtectedProps) {
    const { user, loading } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        // Check loading state before deciding navigation
        if (!loading) {
            if (user) {
                // User is authenticated
                // You may want to do nothing or just return, allowing children to render
                console.log("User is authenticated");
            } else {
                // User is not authenticated, redirect to login
                navigate('/login');
            }
        }
    }, [loading, user, navigate]);

    if (loading) {
        return <PageLoading />; // Replace with your loading UI component
    }

    return <>{children}</>;
}