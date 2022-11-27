import { getAuth } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
export const SellerAuth = createContext();
const Auth = getAuth(app)
const SellerContext = ({ children }) => {
    const [sellers, setSeller] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/seller')
            .then(res => res.json())
            .then(data => setSeller(data))
    }, [])
    const authInfo = { sellers }
    return (
        <SellerAuth.Provider value={authInfo}>
            {children}
        </SellerAuth.Provider >
    );
};

export default SellerContext;