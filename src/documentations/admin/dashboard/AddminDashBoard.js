import React from 'react';
import useTitle from '../../../components/Hooks/useTitle';
import Products from './Products';

const AddminDashBoard = () => {
    useTitle('Admin DashBoard');
    return (
        <div>
            <Products></Products>
        </div>
    );
};

export default AddminDashBoard;