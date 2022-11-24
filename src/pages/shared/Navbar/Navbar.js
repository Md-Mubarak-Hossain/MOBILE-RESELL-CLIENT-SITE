import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menubar = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/dataget'>View</Link></li>
        <li><Link to='/datapost'>Post</Link ></li>
    </>
    return (
        <div className="navbar bg-primary text-primary-content">
            <div className="navbar-start">
                <Link className="btn btn-ghost normal-case text-xl">daisyUI</Link>
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