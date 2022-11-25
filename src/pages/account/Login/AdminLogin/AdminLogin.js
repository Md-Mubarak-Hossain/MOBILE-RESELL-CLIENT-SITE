import React, { useEffect, useState } from 'react';
import useTitle from '../../../../components/Hooks/useTitle';

const AdminLogin = () => {
    useTitle('Admin Login');
    const [admin, setAdmin] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/admin')
            .then(res => res.json())
            .then(data => setAdmin(data))
    }, [])
    console.log(admin);
    return (
        <div>

        </div>
    );
};

export default AdminLogin;