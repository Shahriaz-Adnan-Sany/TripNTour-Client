import { useEffect, useState } from "react"
import initializeAuthentication from "../../Firebase/Firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

// Firebase Initialization
initializeAuthentication();

const useFirebase = () => {
    // Creating States
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    // Creating Auth 
    const auth = getAuth();

    // Google Provider
    const googleProvider = new GoogleAuthProvider();

    // Google Sign In 
    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
            .finally(() =>
                setIsLoading(false));
    }
    // Log Out
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
        })
    }, [])
    return {
        user,
        error,
        isLoading,
        logOut,
        signInUsingGoogle,
    }
}
export default useFirebase;
