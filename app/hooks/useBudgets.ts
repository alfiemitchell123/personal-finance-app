import { useContext, useEffect, useState } from "react";
import { collection, getDocs, query, where, addDoc, onSnapshot } from "firebase/firestore";
import { db } from "~/firebase/firebase";
import { Budget } from "~/types";
import { useAuth } from "~/contexts/authContext/authProvider";

const useBudgets = () => {
    const { user } = useAuth();
    const [budgets, setBudgets] = useState<Budget[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch budgets data
    useEffect(() => {
        const fetchBudgets = async () => {
            if (user) {
                try {
                    const budgetsRef = collection(db, `users/${user.uid}/budgets`);
                    const querySnapshot = await getDocs(budgetsRef);

                    const budgetsData: Budget[] = [];
                    querySnapshot.forEach((doc) => {
                        budgetsData.push({ id: doc.id, ...doc.data() } as Budget);
                    });

                    setBudgets(budgetsData);
                } catch {
                    setError("Error fetching budgets data");
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchBudgets();
    }, [user]);

    // Listener for budgets
    useEffect(() => {
        if (!user) return; // Ensure user is authenticated

        const budgetCollection = collection(db, `users/${user.uid}/budgets`);

        const unsubscribe = onSnapshot(budgetCollection, (snapshot) => {
            const budgetsData: Budget[] = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            })) as Budget[];

            const sortedBudgets = budgetsData.sort((a, b) => {
                const dateA = a.createdAt.toMillis(); // Convert Firestore Timestamp to milliseconds
                const dateB = b.createdAt.toMillis();
                return dateB - dateA; // Sort in descending order
            });

            setBudgets(sortedBudgets);
        }, (error) => {
            setError("Error fetching budgets");
        });

        // Cleanup function to unsubscribe
        return () => unsubscribe();
    }, [user]);

    // Add a new budget
    const addBudget = async (newBudget: Omit<Budget, 'id'>) => {
        try {
            const budgetCollection = collection(db, `users/${user?.uid}/budgets`);
            const docRef = await addDoc(budgetCollection, { ...newBudget, userId: user?.uid }); // Add userId to the budget
            const addedBudget = { id: docRef.id, ...newBudget };
            setBudgets((prevBudgets) => [addedBudget, ...prevBudgets]);
        } catch (err) {
            setError("Error adding budget");
            console.log(err);
        }
    };

    return { budgets, loading, error, addBudget };
}

export default useBudgets;