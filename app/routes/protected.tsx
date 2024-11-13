import { useNavigate } from "@remix-run/react";
import React, { useContext, useEffect, useState } from "react";
import PageLoading from "~/components/ui/pageLoading";
import { useAuth } from "~/contexts/authContext/authProvider";

type ProtectedProps = {
    children: React.ReactNode;
}

export function Protected({ children }: ProtectedProps) {
    const { user, loading } = useAuth();
    const navigate = useNavigate();
    // const [showLoading, setShowLoading] = useState(false);

    // useEffect(() => {
    //     const delay = setTimeout(() => {
    //         if (loading) {
    //             setShowLoading(true);
    //         }
    //     }, 100); // Adjust delay as needed

    //     return () => clearTimeout(delay);
    // }, [loading]);

    useEffect(() => {
        // Check loading state before deciding navigation
        if (!loading) {
            if (user) {
                // User is authenticated
                // You may want to do nothing or just return, allowing children to render
                console.log("User is authenticated");
            } else {
                // User is not authenticated, redirect to login
                console.log("User is not authenticated");
                navigate('/login');
            }
        }
    }, [loading, user, navigate]);

    if (loading) {
        return null;
    }

    if (!user) {
        return null;
    }

    return <>{children}</>;
}