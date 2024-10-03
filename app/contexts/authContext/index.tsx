import React, { useState, useEffect, useContext, ReactNode } from "react";
import { auth } from "~/firebase/firebase";
import { onAuthStateChanged, User } from "firebase/auth";

type AuthContextProps = {
    children: ReactNode;
};

type AuthContextType = {
    currentUser: User | null;
    userLoggedIn: boolean;
    loading: boolean;
};

const AuthContext = React.createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }: AuthContextProps) {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            try {
                if (user) {
                    console.log("User authenticated:", user);
                    console.log("User UID:", user.uid);
                    setCurrentUser(user);
                    setUserLoggedIn(true);
                } else {
                    setCurrentUser(null);
                    setUserLoggedIn(false);
                }
            } catch (error) {
                console.error("Failed to initialize user", error);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const value: AuthContextType = {
        currentUser,
        userLoggedIn,
        loading
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}