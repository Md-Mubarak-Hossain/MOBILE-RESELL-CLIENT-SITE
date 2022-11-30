import { getAuth } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';

export const SellerAuth = createContext();
const Auth = getAuth(app)

const SellerContext = ({ children }) => {
    const [sellers, setSeller] = useState([])
    useEffect(() => {
        fetch('https://mobile-server.vercel.app/seller')
            .then(res => res.json())
            .then(data => setSeller(data))
    }, [])
    const authInfo = { Auth, sellers }
    return (
        <SellerAuth.Provider value={authInfo}>
            {children}
        </SellerAuth.Provider >
    );
};

export default SellerContext;