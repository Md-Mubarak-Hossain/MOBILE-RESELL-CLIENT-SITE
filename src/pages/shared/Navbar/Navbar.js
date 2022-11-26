import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo2.png';
import AdminLogin from '../../account/Login/AdminLogin/AdminLogin';
const Navbar = () => {


    const LoginMenu = <>
        <div className="dropdown dropdown-hover relative">
            <label tabIndex={0} className="btn my-1">Login</label>
            <ul tabIndex={0} className="dropdown-content  p-1 shadow w-40 absolute top-20 right-1 flex flex-col justify-center items-center text-black bg-transparent">
                <li><Link to='/admin'><button className='btn btn-outline btn-warning'>Admin Login</button></Link></li>
                <li><Link to='/seller'><button className='btn btn-outline btn-warning'>Seller Login</button></Link></li>
                <li><Link to='/user'><button className='btn btn-outline btn-warning'>User Login</button></Link></li>
            </ul>
        </div>
    </>
    const adminDashboard = <>
        <li><Link to='/admindashboard'>Admin Dashboard</Link ></li>
    </>
    const sellerDashboard = <>
        <li><Link to='/sellerdashboard'>Seller Dashboard</Link ></li>
    </>
    const userDashboard = <>
        <li><Link to='/userdashboard'>User Dashboard</Link ></li>
        <li><Link to='/wishlist'>AddWishList</Link ></li>
    </>

    const menubar = <>
        <li><Link to='/'>Home</Link></li>
        {/* <li><Link to='/blog'>Blog</Link></li> */}
        {/* <li><Link to='/faq'>FAQ</Link></li> */}
        {/* <li><Link to='/dataget'>View</Link></li>
        <li><Link to='/datapost'>Post</Link ></li> */}
        {adminDashboard}
        {sellerDashboard}
        {userDashboard}
        <li><Link to='/register'>Register</Link></li>
        <li>{LoginMenu}</li>
    </>
    return (
        <div className="navbar bg-night ">
            <div className="navbar-start h-16">
                <Link className="btn btn-ghost normal-case text-xl rounded-full"><img src={logo} alt="Mobile Shop" className='w-16 h-14 rounded-full' /></Link>
                <h2 className='hidden lg:flex lg:text-3xl uppercase lg:font-bold text-warning'>mobile reseller</h2>
            </div>
            <div className="navbar-end">
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menubar}
                    </ul>
                </div>
                <div className="dropdown lg:hidden">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden text-end">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content text-primary  border mt-2">
                        {menubar}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;