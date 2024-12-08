import React, { useEffect, useState, createContext, useContext } from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";

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

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);

            if (currentUser) {
                localStorage.setItem("wasLoggedIn", "true");
            } else {
                localStorage.removeItem("wasLoggedIn");
            }
        });

        if (!loading && !user) {
            const currentUser = auth.currentUser;
            if (currentUser) {
                setUser(currentUser);
                setLoading(false);
            }
        }

        return () => unsubscribe();
    }, [auth]);

    const values = {
        user,
        loading,
        setUser,
    }

    return <AuthContext.Provider value={values}>
        {children}
    </AuthContext.Provider>
}