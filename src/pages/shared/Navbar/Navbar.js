import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo2.png';

import { AuthContext } from '../../../ContextApi/Context';
const Navbar = () => {
   
    const { user } = useContext(AuthContext);
   
    const account = <>
        <li><Link className='px-5 hover:border-b' to='/register'>Register</Link></li>
        <div className="dropdown dropdown-hover relative">
            <label tabIndex={0} className="mr-1">Login</label>
            <ul tabIndex={0} className="dropdown-content w-28 px-1 md:top-4 right-1 bg-base-100  mx-auto flex flex-col justify-center itrms-center">
                <li><Link className="hover:border-b " to='/adminlogin'>Admin login</Link></li>
                <li><Link className="hover:border-b " to='/login'>User login</Link></li>
            </ul>
        </div>
    </>
   
   
    const mdMenubar = <>
        <li><Link to='/'>Home</Link></li>
        {user && user?.uid ?<li><Link to='/userdashboard'>Dashboard</Link></li>:<></>}
        <li><Link to="/brand">Brand</Link></li>
        <li><Link to="/category">Categories</Link></li>
        <li><Link to="/offer">Offer</Link></li>
        <li><Link to="/payment">Payment</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/faq'>Faq</Link></li>
        {user && user?.uid ?<></>:<div className='flex justify-center items-center '>{account}</div>}
    </>
    const smMenubar = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/faq'>Faq</Link></li>
     
    </>
    return (
        <div className="navbar fixed top-0 bg-base-200 mb-10 z-20 text-sm">
            <div className="navbar-start">
                <Link className="flex justify-center items-center">
                    <img src={logo} alt="Mobile Shop" className='rounded-full w-10 h-10' />
                <span className='hidden md:flex capitalize md:font-semibold pl-2'>mobile reuser</span></Link>
            </div>
            <div className="navbar-end">
                <div className="hidden md:flex">
                    <ul className="menu menu-horizontal">
                        {mdMenubar}
                    </ul>
                </div>
                <div className='flex md:hidden'>
                    <div>                    
                        {account}
                    </div>
                    <div className="dropdown md:hidden">
                        <label tabIndex={0} className="btn btn-ghost md:hidden text-end">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="bg-black menu menu-compact dropdown-content text-primary  mt-2">
                            {smMenubar}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;