import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../ContextApi/Context';
import Spin from '../../pages/account/Spinner/Spin';
// import Spin from '../../pages/account/Spinner/Spin';

const UserProtected = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useContext(AuthContext);

    if (user && user.uid) {
        return children;
    }
    if (loading) {
        return <Spin></Spin>
    }
    return (
        <Navigate
            to='/userlogin'
            state={{ from: location }}
            replace>
        </Navigate >
    );
};

export default UserProtected;