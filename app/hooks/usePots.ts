import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "~/firebase/firebase";
import { Pot } from "~/types";
import { useAuth } from "~/contexts/authContext/authProvider";

const usePotsData = () => {
    const { user } = useAuth();
    const [pots, setPots] = useState<Pot[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch pots data
    useEffect(() => {
        const fetchPots = async () => {
            if (user) {
                try {
                    const potsRef = collection(db, `users/${user.uid}/pots`);
                    const querySnapshot = await getDocs(potsRef);

                    const potsData: Pot[] = [];
                    querySnapshot.forEach((doc) => {
                        potsData.push({ id: doc.id, ...doc.data() } as Pot);
                    });

                    setPots(potsData);
                    console.log("Pots data fetched:", potsData);
                } catch {
                    setError("Error fetching pots data");
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchPots();
    }, [user]);

    // Listener for pots
    useEffect(() => {
        if (!user) return; // Ensure user is authenticated

        const potCollection = collection(db, `users/${user.uid}/pots`);

        const unsubscribe = onSnapshot(potCollection, (snapshot) => {
            const potsData: Pot[] = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            })) as Pot[];

            const sortedPots = potsData.sort((a, b) => {
                const dateA = a.createdAt.toMillis(); // Convert Firestore Timestamp to milliseconds
                const dateB = b.createdAt.toMillis();
                return dateA - dateB; // Sort in descending order
            });

            setPots(sortedPots);
        }, (error) => {
            setError("Error fetching pots");
            console.log(error);
        });

        // Cleanup function to unsubscribe
        return () => unsubscribe();
    }, [user]);

    return { pots, loading, error };
}

export default usePotsData;