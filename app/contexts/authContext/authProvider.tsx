// import React, { useState, useEffect, useContext, ReactNode } from "react";
// import { auth } from "~/firebase/firebase";
// import { onAuthStateChanged, User } from "firebase/auth";

// type AuthContextProps = {
//     children: ReactNode;
// };

// type AuthContextType = {
//     currentUser: User | null;
//     userId: string | null;
//     userLoggedIn: boolean;
//     authLoading: boolean;
// };

// const AuthContext = React.createContext<AuthContextType | undefined>(undefined);

// export function useAuth() {
//     const context = useContext(AuthContext);
//     if (!context) {
//         throw new Error('useAuth must be used within an AuthProvider');
//     }
//     return context;
// }

// export function AuthProvider({ children }: AuthContextProps) {
//     const [newCurrentUser, setNewCurrentUser] = useState<currentUser>(null);
//     const [userLoggedIn, setUserLoggedIn] = useState(false);
//     const [authLoading, setAuthLoading] = useState(true);
//     const [userId, setUserId] = useState<string | null>(null);

//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, (user) => {
//             if (currentUser) {
//                 // User is authenticated
//                 setCurrentUser(user);
//                 setUserId(currentUser.uid); // Set userId
//                 setUserLoggedIn(true);
//             } else {
//                 // User is signed out
//                 setCurrentUser(null);
//                 setUserId(null); // Reset userId
//                 setUserLoggedIn(false);
//             }
//             setAuthLoading(false);
//         });

//         return () => unsubscribe();
//     }, []);

//     const value: AuthContextType = {
//         currentUser,
//         userId,
//         userLoggedIn,
//         authLoading,
//     };

//     return (
//         <AuthContext.Provider value={value}>
//             {!authLoading && children}
//         </AuthContext.Provider>
//     );
// }

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
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoading(false);
            if (currentUser) {
                setUser(currentUser);
                // console.log("User set in AuthProvider:", currentUser);
            } else {
                setUser(null);
                console.log("User set to null in AuthProvider");
            }
        });
        return () => {
            if (unsubscribe) {
                unsubscribe();
            }
        }
    }, [auth]);

    // useEffect(() => {
    //     console.log("AuthProvider user state:", user);
    //     console.log("AuthProvider loading state:", loading);
    // }, [user, loading]);

    const values = {
        user,
        loading,
        setUser,
    }

    return <AuthContext.Provider value={values}>
        {children}
    </AuthContext.Provider>
}