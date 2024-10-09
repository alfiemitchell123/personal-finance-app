import { Transaction } from "~/types";

export const sortTransactions = (transactions: Transaction[], filter: string) => {
    // Check if transactions is an array and not null/undefined
    if (!Array.isArray(transactions)) {
        console.error("Expected an array of transactions, but got:", transactions);
        return []; // Return an empty array if the input is invalid
    }

    switch (filter) {
        case 'latest':
            return [...transactions].sort((a, b) => b.transactionDate.toDate().getTime() - a.transactionDate.toDate().getTime());
        case 'oldest':
            return [...transactions].sort((a, b) => a.transactionDate.toDate().getTime() - b.transactionDate.toDate().getTime());
        case 'aToZ':
            return [...transactions].sort((a, b) => a.transactionCategory.localeCompare(b.transactionCategory));
        case 'zToA':
            return [...transactions].sort((a, b) => b.transactionCategory.localeCompare(a.transactionCategory));
        case 'lowest':
            return [...transactions].sort((a, b) => a.transactionAmt - b.transactionAmt);
        case 'highest':
            return [...transactions].sort((a, b) => b.transactionAmt - a.transactionAmt);
        default:
            return transactions;
    }
}

export const filterTransactionsByCategory = (transactions: Transaction[], category: string) => {
    if (category === 'All Transactions') return transactions;
    return transactions.filter(transaction => transaction.transactionCategory === category);
}