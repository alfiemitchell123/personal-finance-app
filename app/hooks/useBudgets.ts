import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "~/firebase/firebase";
import { Budget } from "~/types";

const useBudgetsData = () => {
    const [budgets, setBudgets] = useState<Budget[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const unsubscribe = onSnapshot(
            query(collection(db, "budgets"), orderBy("createdAt", "asc")),
            (snapshot) => {
                const fetchedBudgets: Budget[] = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                })) as Budget[];
                setBudgets(fetchedBudgets);
                setLoading(false);
            },
            (err) => {
                setError("Error fetching budgets");
                console.log(err);
                setLoading(false);
            }
        );

        return () => unsubscribe();
    }, []);

    return { budgets, loading, error };
}

export default useBudgetsData;