import { FIREBASE_AUTH } from "../FirebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

const auth = FIREBASE_AUTH;

export const signUp = async (name, email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(auth.currentUser, {displayName: name});
        console.log("User Profile: ", auth.currentUser);
        return { success: true, user: userCredential.user };
    } catch (error) {
        console.log(error);
        return { success: false, error };
    }
}

