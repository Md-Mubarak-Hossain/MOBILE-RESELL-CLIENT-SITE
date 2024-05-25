import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../../ContextApi/Context';
import Home from '../../default/home/Home';
import { add,buy,list,dashboard,logout as log,see } from '../../../assets/svg/Svg';

const UserDashboard = () => {
    const { user, logOut } = useContext(AuthContext);
    const logout = () => {
        logOut()
             .then(() => { return <Home/> })
            .catch(err => console.error(err))
    }
    return (
        <div>
            
            <div className="flex w-full justify-between  bg-blue-900 relative h-fit">
            <div className='w-1/5 flex flex-col gap-2 px-5 text-xs menu py-10 fixed top-10'>
            <div><img src={user?.photoURL} alt={user?.displayName} className='w-14 h-14 rounded-full bg-white'/></div>
            <Link to={'/userdashboard'} className='flex justify-start w-fit items-center rounded-full btn  hover:bg-gray-100 min-w-40 btn-outline  focus:bg-gray-500 btn-sm my-1 mt-20'><img src={dashboard} alt="dashboard" className='w-8 h-8 pr-1'/> Dashboard</Link>
            <Link to={'/userdashboard/addwishlist'} className='flex justify-start w-fit items-center rounded-full btn  hover:bg-gray-100 min-w-40 btn-outline  focus:bg-gray-500 btn-sm my-1'> <img src={list} alt="add" className='w-8 h-8 pr-1'/> Product Wish List</Link>
           <Link to={'/userdashboard/addproduct'} className='flex justify-start w-fit items-center rounded-full btn  hover:bg-gray-100 min-w-40 btn-outline  focus:bg-gray-500 btn-sm my-1'><img src={add} alt="add" className='w-8 h-8 pr-1'/>Add Product </Link>
            <Link to={'/userdashboard/buyproduct'} className='flex justify-start w-fit items-center rounded-full btn  hover:bg-gray-100 min-w-40 btn-outline  focus:bg-gray-500 btn-sm my-1'><img src={buy} alt="add" className='w-8 h-8 pr-1'/>Buy Product </Link>
            {/* <Link to={'/userdashboard/payment/:id'} className='flex justify-start w-fit items-center rounded-full btn  hover:bg-gray-100 min-w-40 btn-outline  focus:bg-gray-500 btn-sm my-1'><img src={} alt="add" className='w-8 h-8 pr-1'/>Payment</Link> */}
            <Link to={'/userdashboard/seeproduct'} className='flex justify-start w-fit items-center rounded-full btn  hover:bg-gray-100 min-w-40 btn-outline  focus:bg-gray-500 btn-sm my-1'><img src={see} alt="add" className='w-8 h-8 pr-1'/>See Product </Link>
            {/* <Link to={'/userdashboard/updatescreen'} className='flex justify-start w-fit items-center rounded-full btn  hover:bg-gray-100 min-w-40 btn-outline  focus:bg-gray-500 btn-sm my-1'><img src={} alt="add" className='w-8 h-8 pr-1'/>Update Screen </Link> */}
            {user && user?.uid ?<Link  onClick={() => logout()} className='flex justify-start w-fit items-center rounded-full btn  hover:bg-gray-100 min-w-40 btn-outline  focus:bg-gray-500 btn-sm my-1'><img src={log} alt="add" className='w-8 h-8 pr-1'/>Log out</Link>:<></>}
            {/* <UpdateProduct/> */}</div>
            <div className='w-4/5 bg-gray-600 ml-auto'>
                <Outlet/>
            </div>
        </div>
        </div>
    );
};

export default UserDashboard;