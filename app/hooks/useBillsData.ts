import { Transaction } from "firebase/firestore";
import { useEffect, useState } from "react";
import useTransactionData from "./useTransactions";

const useBillsData = () => {
    const { transactions, loading } = useTransactionData();
    const [billsData, setBillsData] = useState({ totalPaidAmount: 0, totalUpcoming: 0, totalDueSoon: 0, numberOfPaidBills: 0, numberOfUpcomingBills: 0, numberOfDueSoonBills: 0 });

    useEffect(() => {
        if (!transactions || transactions.length === 0) return;

        const billsPaid = transactions?.filter((transaction) => transaction.recurringBill && transaction.transactionDate.toDate().getTime() < new Date().getTime()) || [];
        const numberOfPaidBills = billsPaid.length;
        const totalPaidAmount = billsPaid.reduce((sum, transaction) => sum + Math.abs(transaction.transactionAmt || 0), 0);

        const billsUpcoming = transactions?.filter((transaction) => {
            if (transaction.recurringBill) {
                const transactionDate = transaction.transactionDate.toDate().getTime();
                const now = new Date().getTime();
                const sevenDaysFromNow = now + 7 * 24 * 60 * 60 * 1000;
                return transactionDate > now && transactionDate >= sevenDaysFromNow;
            }
            return false;
        }) || [];
        const numberOfUpcomingBills = billsUpcoming.length;
        const totalUpcoming = billsUpcoming.reduce((sum, transaction) => sum + Math.abs(transaction.transactionAmt || 0), 0);

        const billsDueSoon = transactions?.filter((transaction) => {
            if (transaction.recurringBill) {
                const transactionDate = transaction.transactionDate.toDate().getTime();
                const now = new Date().getTime();
                const sevenDaysFromNow = now + 7 * 24 * 60 * 60 * 1000;
                return transactionDate > now && transactionDate <= sevenDaysFromNow;
            }
            return false;
        }) || [];
        const numberOfDueSoonBills = billsDueSoon.length;
        const totalDueSoon = billsDueSoon.reduce((sum, transaction) => sum + Math.abs(transaction.transactionAmt || 0), 0);

        setBillsData({ totalPaidAmount, totalUpcoming, totalDueSoon, numberOfPaidBills, numberOfUpcomingBills, numberOfDueSoonBills });
    }, [transactions]);

    return billsData;
}

export default useBillsData;