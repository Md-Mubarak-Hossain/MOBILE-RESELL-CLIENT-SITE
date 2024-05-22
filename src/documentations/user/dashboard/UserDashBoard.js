import React from 'react';
import { Link, Outlet } from 'react-router-dom';
const UserDashboard = () => {
    return (
        <div className="flex w-full h-screen justify-between relative bg-base-300">
            <div className='w-1/5 flex flex-col gap-2 px-5 text-xs menu py-10 fixed top-10  bg-base-300'>
            <Link to={'/userdashboard'} className='btn btn-outline rounded-full btn-sm'>Dashboard</Link>
            <Link to={'/userdashboard/addwishlist'} className='btn btn-outline rounded-full btn-sm'>Add Wish List</Link>
            <Link to={'/userdashboard/addproduct'} className='btn btn-outline rounded-full btn-sm'>Add Product </Link>
            <Link to={'/userdashboard/buyproduct'} className='btn btn-outline rounded-full btn-sm'>Buy Product </Link>
            <Link to={'/userdashboard/payment'} className='btn btn-outline rounded-full btn-sm'>Payment</Link>
            <Link to={'/userdashboard/seeproduct'} className='btn btn-outline rounded-full btn-sm'>See Product </Link>
            <Link to={'/userdashboard/updatescreen'} className='btn btn-outline rounded-full btn-sm'>Update Screen </Link>
            {/* <UpdateProduct/> */}</div>
            <div className='w-4/5 bg-gray-600 ml-auto'>
                <Outlet/>
            </div>
        </div>
    );
};

export default UserDashboard;