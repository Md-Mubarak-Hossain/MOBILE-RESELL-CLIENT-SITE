import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app);

const Context = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    // const user = 'Md Mubarak Hossain'
    /*.....create user email password start.....*/
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    /*.....create user email password end.....*/

    /*.....sign in/log in user email password .....*/
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    /*.....google log in user email password .....*/
    const googleLogIn = (email, password) => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    /*.....sign out/log out user email password .....*/
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => setUser(currentUser));
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = { user, loading, createUser, logIn, logOut, googleLogIn }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default Context;