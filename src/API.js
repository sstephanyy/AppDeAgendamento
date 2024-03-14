import { FIREBASE_AUTH } from "../FirebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const auth = FIREBASE_AUTH;

export const signUp = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log(userCredential);
        return { success: true, user: userCredential.user };

    } catch (error) {
        console.log(error);
        return { success: false, error };
    }
}

export const signIn = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return { success: true, user: userCredential.user };
    } catch (error) {
        console.log(error);
        return { success: false, error };
    }
}
