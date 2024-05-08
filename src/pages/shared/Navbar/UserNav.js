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
            .then(() => { })
            .catch(err => console.error(err))
    }
    const profile = <div className="avatar">
        {users?.map(usr => <li key={usr._id}>
            {user && user.uid && usr.email?.includes(user.email) ?
                <>
                    <div className="w-16 rounded-full">
                        <img src={usr.picture} title={usr.username} alt='profile' />
                    </div>
                </>
                :
                <div className="hidden"></div>

            }
        </li>)}
    </div>
    const menubar = <>
        <li><Link to='/userdashboard/home'>Home</Link></li>
        <li> <Link to='/userdashboard'>User Dashboard</Link></li>
        <li><Link to='/userdashboard/blog'>Blog</Link></li>
        <li><Link to='/userdashboard/faq'>FAQ</Link></li>
        <li> <Link to='/userdashboard/wishlist'>Wish List</Link></li>
        <li> <Link to='/'><button onClick={() => logout()} className='btn btn-sm btn-ghost'>Log out</button></Link>
        </li>
        <li>{profile}</li>
    </>
    return (
        <div className='w-full bg-night text-center fixed h-16 z-20 bg-base-300'>

            <div className="flex justify-between">
                <div className="flex gap-2 justify-center items-center">
                    <Link className="w-10 h-10 bg-gray-300 rounded-full flex justify-center items-center"><img src={logo} alt="Mobile Shop" className='w-8 h-8 rounded-full' />
                    </Link>
                    <h2 className='hidden md:flex  capitalize md:font-semibold pl-2'>mobile reuser</h2>
                </div>

                <div className="hidden md:flex">
                    <ul className="menu menu-horizontal">
                        {menubar}
                    </ul>
                </div>

            </div>
            <div className="dropdown md:hidden w-full">
                <label tabIndex={0} className="md:hidden text-end flex flex-col place-items-end btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul data-theme="night" tabIndex={0} className=" absolute w-full mx-0 px-0 menu menu-compact dropdown-content text-primary top-5 left-0 right-5 mt-2">
                    {menubar}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;