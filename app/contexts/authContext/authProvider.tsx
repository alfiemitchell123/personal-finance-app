import React, { useEffect, useState, createContext, useContext } from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import PageLoading from "~/components/ui/pageLoading";

type AuthContextProps = {
    children: React.ReactNode;
}

type AuthContextType = {
    user: User | null;
    loading: boolean;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

export function AuthProvider({ children }: AuthContextProps) {
    const auth = getAuth();
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const wasLoggedIn = localStorage.getItem("wasLoggedIn") === "true";
        if (wasLoggedIn) {
            setLoading(true);
        }

        console.log("Starting AuthProvider, loading:", loading);

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("onAuthStateChanged fired with user:", currentUser);
            setUser(currentUser);
            setLoading(false);
            console.log("Loading set to false after auth state changed");

            if (currentUser) {
                localStorage.setItem("wasLoggedIn", "true");
            } else {
                localStorage.removeItem("wasLoggedIn");
            }

            console.log("User state in AuthProvider:", currentUser);
        });

        if (!loading && !user) {
            const currentUser = auth.currentUser;
            if (currentUser) {
                console.log("Direct check found a current user:", currentUser);
                setUser(currentUser);
                setLoading(false);
            }
        }

        return () => unsubscribe();
    }, [auth]);

    useEffect(() => {
        console.log("AuthProvider user state:", user);
        console.log("AuthProvider loading state:", loading);
    }, [user, loading]);

    const values = {
        user,
        loading,
        setUser,
    }

    return <AuthContext.Provider value={values}>
        {children}
    </AuthContext.Provider>
}