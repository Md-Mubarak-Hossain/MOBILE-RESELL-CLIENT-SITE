import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo2.png';
import { AuthContext } from '../../../ContextApi/Context';
import { UserAuth } from '../../../ContextApi/UserContext';

const Navbar = () => {
    const { users } = useContext(UserAuth)
    const { user, logOut } = useContext(AuthContext);
    const logout = () => {
        logOut()
            .then(result => { })
            .catch(err => console.error(err))
    }
    const profile = <div className="avatar">
        <div className="w-16 rounded-full">
            <img src={user?.photoURL} title={user?.displayName} alt='profile' />
        </div>
    </div>
    const menubar = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/faq'>FAQ</Link></li>
        <li> <Link to='/userdashboard'>Dashboard</Link></li>
        <li> <Link to='/userdashboard/wishlist'>Wish List</Link></li>
        <li> <Link to='/'><button onClick={() => logout()} className='btn btn-sm btn-ghost'>Log out</button></Link>
        </li>
        <li>{profile}</li>
    </>
    return (
        <div className='w-full bg-night text-center'>
            <h2 className='hidden lg:flex lg:text-xl uppercase lg:font-semibold text-warning w-full text-center'>mobile reseller</h2>
            <div className="navbar">
                <div className="navbar-start h-16">
                    <Link className="btn btn-ghost normal-case text-xl rounded-full"><img src={logo} alt="Mobile Shop" className='w-16 h-14 rounded-full' /></Link>
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
            </div >
        </div >
    );
};

export default Navbar;