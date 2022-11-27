import { getAuth } from 'firebase/auth';
import React, { createContext } from 'react';
import app from '../firebase/firebase.config';
export const SellerAuth = createContext();
const Auth = getAuth(app)
const SellerContext = ({ children }) => {
    const email = 'jaka@gmail.com'
    const authInfo = { email }
    return (
        <SellerAuth.Provider value={authInfo}>
            {children}
        </SellerAuth.Provider >
    );
};

export default SellerContext;