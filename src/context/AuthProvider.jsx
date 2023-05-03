import React, { createContext, useState, useEffect } from "react";
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { getStorage, ref, uploadBytes } from "firebase/auth";

const auth = getAuth(app);
const storage = getStorage();

export const AuthContext = createContext(null);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password, displayName) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password, displayName);
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
            console.log("logged in user inside auth state observer", loggedUser);
            setUser(loggedUser);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const upload = async (file, user, setLoading) => {
        const fileRef = ref(storage, user.uid + ".png");

        setLoading(true);
        const spanShot = await uploadBytes(fileRef, file);
        setLoading(false);
        alert("Upload completed");
    };

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        upload,
    };

    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
