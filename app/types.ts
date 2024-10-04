// app/types.ts

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
    currentBalance: number;
    income: number;
    expenses: number;
}

export interface Transaction {
    id: string;
    transactionAmt: number;
    transactionDate: { toDate: () => Date };
    transactionName: string;
    transactionCategory: string;
    transactionImg?: string;
}