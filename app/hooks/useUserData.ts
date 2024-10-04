import { useEffect, useState } from "react";
import { useAuth } from "~/contexts/authContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "~/firebase/firebase";

const useUserData = () => {
    const { currentUser, userLoggedIn } = useAuth() || { userLoggedIn: false };
    const [userData, setUserData] = useState<any>(null);
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
                        setUserData(userSnap.data());
                    } else {
                        setError("No user data available");
                    }
                } catch (err) {
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