import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../../ContextApi/Context';
import Home from '../../default/home/Home';
const UserDashboard = () => {
    const { user, logOut } = useContext(AuthContext);
    const logout = () => {
        logOut()
             .then(() => { return <Home/> })
            .catch(err => console.error(err))
    }
    return (
        <div>
            <div className="flex w-full justify-between  bg-base-300 relative h-fit">
            <div className='w-1/5 flex flex-col gap-2 px-5 text-xs menu py-10 fixed top-10 bg-base-300'>
                <div><img src={user?.photoURL} alt={user?.displayName} className='w-10 h-10 rounded-full bg-base-100'/></div>
            <Link to={'/userdashboard'} className='flex justify-start w-fit items-center rounded-full btn bg-base-300 hover:btn-outline  focus:bg-gray-500 btn-sm'>Dashboard</Link>
            <Link to={'/userdashboard/addwishlist'} className='flex justify-start w-fit items-center rounded-full btn bg-base-300 hover:btn-outline  focus:bg-gray-500 btn-sm'>Product Wish List</Link>
            <Link to={'/userdashboard/addproduct'} className='flex justify-start w-fit items-center rounded-full btn bg-base-300 hover:btn-outline  focus:bg-gray-500 btn-sm'>Add Product </Link>
            <Link to={'/userdashboard/buyproduct'} className='flex justify-start w-fit items-center rounded-full btn bg-base-300 hover:btn-outline  focus:bg-gray-500 btn-sm'>Buy Product </Link>
            {/* <Link to={'/userdashboard/payment/:id'} className='flex justify-start w-fit items-center rounded-full btn bg-base-300 hover:btn-outline  focus:bg-gray-500 btn-sm'>Payment</Link> */}
            <Link to={'/userdashboard/seeproduct'} className='flex justify-start w-fit items-center rounded-full btn bg-base-300 hover:btn-outline  focus:bg-gray-500 btn-sm'>See Product </Link>
            {/* <Link to={'/userdashboard/updatescreen'} className='flex justify-start w-fit items-center rounded-full btn bg-base-300 hover:btn-outline  focus:bg-gray-500 btn-sm'>Update Screen </Link> */}
            {user && user?.uid ?<Link  onClick={() => logout()} className='flex justify-start w-fit items-center rounded-full btn bg-base-300 hover:btn-outline  focus:bg-gray-500 btn-sm'>Log out</Link>:<></>}
            {/* <UpdateProduct/> */}</div>
            <div className='w-4/5 bg-gray-600 ml-auto'>
                <Outlet/>
            </div>
        </div>
        </div>
    );
};

export default UserDashboard;