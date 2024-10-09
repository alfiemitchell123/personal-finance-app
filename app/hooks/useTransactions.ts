import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "~/firebase/firebase";
import { Transaction } from "~/types";

const useTransactionData = () => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "transactions"));
                const fetchedTransactions: Transaction[] = [];
                querySnapshot.forEach((doc) => {
                    fetchedTransactions.push({ id: doc.id, ...doc.data() } as Transaction);
                });
                setTransactions(fetchedTransactions);
            } catch (err) {
                setError("Error fetching transactions");
            } finally {
                setLoading(false);
            }
        };

        fetchTransactions();
    }, []);

    return { transactions, loading, error };
}

export default useTransactionData;