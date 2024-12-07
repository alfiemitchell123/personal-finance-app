import { useEffect, useState } from "react";
import { addDoc, collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "~/firebase/firebase";
import { Transaction } from "~/types";
import { useAuth } from "~/contexts/authContext/authProvider";

const useTransactionData = () => {
    const { user } = useAuth();
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch transactions data
    useEffect(() => {
        const fetchTransactions = async () => {
            if (user) {
                try {
                    const transactionsRef = collection(db, `users/${user.uid}/transactions`);
                    const querySnapshot = await getDocs(transactionsRef);

                    const transactionsData: Transaction[] = [];
                    querySnapshot.forEach((doc) => {
                        transactionsData.push({ id: doc.id, ...doc.data() } as Transaction);
                    });

                    setTransactions(transactionsData);
                } catch {
                    setError("Error fetching transactions data");
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchTransactions();
    }, [user]);

    // Listener for transactions
    useEffect(() => {
        if (!user) return; // Ensure user is authenticated

        const transactionCollection = collection(db, `users/${user.uid}/transactions`);

        const unsubscribe = onSnapshot(transactionCollection, (snapshot) => {
            const transactionsData: Transaction[] = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            })) as Transaction[];

            const sortedTransactions = transactionsData.sort((a, b) => {
                const dateA = a.transactionDate.toMillis();
                const dateB = b.transactionDate.toMillis();
                return dateB - dateA;
            });

            setTransactions(sortedTransactions);
        }, (error) => {
            setError("Error fetching budgets");
            console.log(error);
        });

        // Cleanup function to unsubscribe
        return () => unsubscribe();
    }, [user]);

    // Add a new budget
    const addTransaction = async (newTransaction: Omit<Transaction, 'id'>) => {
        try {
            const transactionCollection = collection(db, `users/${user?.uid}/transactions`);
            const docRef = await addDoc(transactionCollection, { ...newTransaction, userId: user?.uid });
            const addedTransaction = { id: docRef.id, ...newTransaction };
            setTransactions((prevTransactions) => [addedTransaction, ...prevTransactions]);
        } catch (err) {
            setError("Error adding transaction");
            console.log(err);
        }
    };

    return { transactions, loading, error, addTransaction };
}

export default useTransactionData;