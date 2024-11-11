import { auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

export const doCreateUserWithEmailAndPassword = async (email: string, password: string) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential; // Return the user credential object if needed
    } catch (error) {
        console.error("Error registering user:", error);
        throw error; // Rethrow the error if you want to handle it elsewhere
    }
};

export const doSignInWithEmailAndPassword = (email: string, password: string) => {
    console.log("User signed in.");
    return signInWithEmailAndPassword(auth, email, password);
};

export const doSignOut = () => {
    console.log("User signed out.");
    return auth.signOut();
}