import { getAuth } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
export const UserAuth = createContext()
const Auth = getAuth(app)
const UserContext = ({ children }) => {
    const [users, setUser] = useState([])
    useEffect(() => {
        fetch('https://mobile-server.vercel.app/user')
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])
    const authInfo = { Auth, users }
    return (
        <UserAuth.Provider value={authInfo}>
            {children}
        </UserAuth.Provider>
    );
};

export default UserContext;