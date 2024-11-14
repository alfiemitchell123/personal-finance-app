import { useNavigate } from "@remix-run/react";
import React, { useEffect } from "react";
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
            if (!user) {
                navigate('/login');
            }
        }
    }, [loading, user, navigate]);

    if (loading) {
        return null;
    }

    return <>{children}</>;
}