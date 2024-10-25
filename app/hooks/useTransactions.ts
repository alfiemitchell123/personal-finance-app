import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
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
                    console.log("Transactions data fetched:", transactionsData);
                } catch {
                    setError("Error fetching transactions data");
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchTransactions();
    }, [user]);

    return { transactions, loading, error };
}

export default useTransactionData;