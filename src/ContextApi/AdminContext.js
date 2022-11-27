
import { getAuth } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
export const AdminAuth = createContext()
const Auth = getAuth(app)
const AdminContext = ({ children }) => {
    const [admins, setAdmin] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/admin')
            .then(res => res.json())
            .then(data => setAdmin(data))
    }, [])
    const authInfo = { admins }
    return (
        <AdminAuth.Provider value={authInfo}>
            {children}
        </AdminAuth.Provider>
    );
};

export default AdminContext;