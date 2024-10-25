// app/types.ts

import { Timestamp } from "firebase/firestore";

export interface LoaderData {
    ENV: {
        VITE_FIREBASE_API_KEY: string;
        VITE_FIREBASE_AUTH_DOMAIN: string;
        VITE_FIREBASE_PROJECT_ID: string;
        VITE_FIREBASE_STORAGE_BUCKET: string;
        VITE_FIREBASE_MESSAGING_SENDER_ID: string;
        VITE_FIREBASE_APP_ID: string;
    };
}

export interface UserData {
    id: string;
    currentBalance: number;
    income: number;
    expenses: number;
    profileImgUrl: string;
    displayName: string;
}

export interface Transaction {
    id: string;
    transactionAmt: number;
    transactionDate: Timestamp;
    transactionName: string;
    transactionCategory: string;
    transactionImg?: string;
    recurringBill: boolean;
    recurringDate?: Timestamp;
}

export interface Pot {
    id: string;
    potName: string;
    potColor: string;
    targetAmt: number;
    totalSaved: number;
    createdAt: Timestamp;
}

export interface Budget {
    id: string;
    budgetCategory: string;
    budgetColor: string;
    maxSpend: number;
    totalSpent: number;
    totalRemaining: number;
    createdAt: Timestamp;
}