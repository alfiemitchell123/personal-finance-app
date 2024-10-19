import { useEffect, useState } from "react";
import { useAuth } from "~/contexts/authContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "~/firebase/firebase";
import { UserData } from "~/types";

const useUserData = () => {
    const { currentUser } = useAuth() || { currentUser: null };
    const [userData, setUserData] = useState<UserData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch user data
    useEffect(() => {
        const fetchUserData = async () => {
            if (currentUser) {
                try {
                    const userRef = doc(db, "users", currentUser.uid);
                    const userSnap = await getDoc(userRef);

                    if (userSnap.exists()) {
                        const data = userSnap.data() as UserData;
                        setUserData(data); // Make sure to set user data here
                    } else {
                        setError("No user data available");
                    }
                } catch {
                    setError("Error fetching user data");
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchUserData();
    }, [currentUser]);

    return { userData, loading, error };
}

export default useUserData;