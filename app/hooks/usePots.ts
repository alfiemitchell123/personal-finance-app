import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "~/firebase/firebase";
import { Pot } from "~/types";

const usePotsData = () => {
    const [pots, setPots] = useState<Pot[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const unsubscribe = onSnapshot(
            query(collection(db, "pots"), orderBy("createdAt", "asc")),
            (snapshot) => {
                const fetchedPots: Pot[] = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                })) as Pot[];
                setPots(fetchedPots);
                setLoading(false);
            },
            (err) => {
                setError("Error fetching pots");
                setLoading(false);
            }
        );

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    return { pots, loading, error };
}

export default usePotsData;