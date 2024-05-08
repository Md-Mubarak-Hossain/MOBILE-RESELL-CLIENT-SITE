import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo2.png';

import { AuthContext } from '../../../ContextApi/Context';

const AdminNavbar = () => {

    const { logOut } = useContext(AuthContext);
    const logout = () => {
        logOut()
         .then(() => { })
            .catch(err => console.error(err))
    }
    const menubar = <>
        <li><Link to='/admindashboard'>Home</Link></li>
        <li><Link to='/admindashboard/blog'>Blog</Link></li>
        <li><Link to='/admindashboard/faq'>FAQ</Link></li>
        <li> <Link to='/admindashboard/home'>Admin Dashboard</Link></li>
        <li> <Link to='/admindashboard/category'>Product Category</Link></li>
        <li> <Link to='/admindashboard/wishlist'>See Wish List</Link></li>
        <li> <Link to='/'><button onClick={() => logout()} className='btn btn-sm btn-ghost'>Log out</button></Link>
        </li>
    </>
    return (
        <div className='w-full  text-center'>
            <div className="navbar">
                <div className="navbar-start h-16">
                    <Link className="btn btn-ghost normal-case text-xl rounded-full"><img src={logo} alt="Mobile Shop" className='w-16 h-14 rounded-full' /></Link>
                    <h2 className='hidden lg:flex lg:text-xl uppercase lg:font-semibold text-warning w-full text-center'>mobile reseller</h2>
                </div>
                <div className="navbar-end">
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">
                            {menubar}
                        </ul>
                    </div>
                    <div className="dropdown lg:hidden w-full">
                        <label tabIndex={0} className="lg:hidden text-end flex flex-col place-items-end btn-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul data-theme="night" tabIndex={0} className=" absolute w-full mx-0 px-0 menu menu-compact dropdown-content text-primary top-5 left-0 right-5 mt-2">
                            {menubar}
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AdminNavbar;