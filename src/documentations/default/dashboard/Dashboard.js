import React from 'react';
import useTitle from '../../../components/Hooks/useTitle';
import SeeProduct from '../../../pages/products/SeeProduct';

const Dashboard = () => {
    useTitle('User Dashboard')
    return (
        <div>
            <SeeProduct></SeeProduct>
        </div>
    );
};

export default Dashboard;