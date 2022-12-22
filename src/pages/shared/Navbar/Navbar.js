import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo2.png';
import { AdminAuth } from '../../../ContextApi/AdminContext';
import { AuthContext } from '../../../ContextApi/Context';
import { SellerAuth } from '../../../ContextApi/SellerContext';
import { UserAuth } from '../../../ContextApi/UserContext';
const Navbar = () => {
    const { admins } = useContext(AdminAuth)
    const { users } = useContext(UserAuth)
    const { sellers } = useContext(SellerAuth)
    const { user, logOut } = useContext(AuthContext);
    const logout = () => {
        logOut()
            .then(result => { })
            .catch(err => console.error(err))
    }
    const LoginMenu = <>
        <div className="dropdown dropdown-hover relative">
            <label tabIndex={0} className="btn my-1">Login</label>
            <ul tabIndex={0} className="dropdown-content rounded-box p-1 shadow w-52 absolute lg:top-10 right-1 place-items-center text-black bg-base-100 ">
                <h2 className='text-warning'>Select a Category </h2>
                <li className='lg:text-xs mx-0 px-0'><Link to='/adminlogin'><button className='btn btn-outline btn-warning btn-sm w-16 text-xs'>Admin Login</button></Link></li>
                <li className='lg:text-xs mx-0 px-0'><Link to='/userdashboard/userlogin'><button className='btn btn-outline btn-warning btn-sm w-16 text-xs'>user Login</button></Link></li>
                <li className='lg:text-xs mx-0 px-0'><Link to='/sellerlogin'><button className='btn btn-outline btn-warning btn-sm w-16 text-xs'>Seller Login</button></Link></li>
            </ul>
        </div>
    </>
    const registerMenu = <>
        <div className="dropdown dropdown-hover relative">
            <label tabIndex={0} className="btn m-1">Register</label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100  rounded-box w-52 absolute lg:top-10 text-center place-items-center">
                <h2 className='text-warning'>Select a Category </h2>
                <li className='lg:text-xs mx-0 px-0'><Link to='/register'><button className='btn btn-outline btn-warning btn-sm w-16 text-xs'>User</button></Link></li>
                <li className='lg:text-xs mx-0 px-0'><Link to='/sellerRegister'><button className='btn btn-outline btn-warning btn-sm w-16 text-xs'>Seller</button></Link></li>
            </ul>
        </div>
    </>
    const signOut = <li className='text-xs px-0 mx-0'> <Link to='/'><button onClick={() => logout()} className='btn btn-sm btn-ghost'>Log out</button></Link></li>
    const AdminDashboard =
        <>{
            admins?.map(admin => <li key={admin._id}>
                {user && user.uid?.includes("WfPgID7xMcQ02ZN9GEWCYBmO9WX2") && admin.email.includes("mubarak@gmail.com") ?
                    <>
                        <li className='lg:text-xs mx-0 px-0'> <Link to='/admindashboard'>Admin Dashboard</Link></li>
                        {signOut}
                    </>
                    : <>
                    </>}
            </li>)

        }
        </>

    const userDashboard = <>{
        users?.map(usr => <li key={usr._id}>
            {user && user.uid && usr.email?.includes(user.email) ?
                <>
                    <li className='lg:text-xs mx-0 px-0 text-orange-400'>
                        <Link to='/userdashboard'>
                            User Dashboard</Link></li>
                    {signOut}
                </>
                : <>
                </>}
        </li>)

    }
    </>
    const sellerDashboard = <>{
        sellers?.map(seller => <li key={seller._id}>
            {user && user.uid && seller.email?.includes(user.email) ?
                <>
                    <li className='lg:text-xs mx-0 px-0'> <Link to='/sellerdashboard'>Seller Dashboard</Link></li>
                    {signOut}
                </>
                : <>
                </>}
        </li>)

    }
    </>
    const login = <>
        {
            user && user.uid ?
                <></>
                :
                <div>
                    {registerMenu}
                    {LoginMenu}
                </div>
        }
    </>
    const lgMenubar = <>
        <li className='lg:text-xs mx-0 px-0'><Link to='/'>Home</Link></li>
        <li className='lg:text-xs mx-0 px-0'><Link to='/blog'>Blog</Link></li>
        <li className='lg:text-xs mx-0 px-0'><Link to='/faq'>FAQ</Link></li>
        {AdminDashboard}
        {userDashboard}
        {sellerDashboard}
        <li className='flex '>{login}</li>
    </>
    const smMenubar = <>
        <li className='lg:text-xs mx-0 px-0'><Link to='/'>Home</Link></li>
        <li className='lg:text-xs mx-0 px-0'><Link to='/blog'>Blog</Link></li>
        <li className='lg:text-xs mx-0 px-0'><Link to='/faq'>FAQ</Link></li>
        {AdminDashboard}
        {userDashboard}
        {sellerDashboard}
    </>
    return (
        <div className="navbar bg-night ">
            <div className="navbar-start h-16">
                <Link className="btn btn-ghost normal-case text-xl rounded-full"><img src={logo} alt="Mobile Shop" className='w-16 h-14 rounded-full' /></Link>
                <h2 className='hidden lg:flex lg:text-xl uppercase lg:font-semibold text-warning'>mobile reuser</h2>
            </div>
            <div className="navbar-end">
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {lgMenubar}
                    </ul>
                </div>
                <div className='flex lg:hidden lg:w-0 lg:h-0'>
                    <div className='flex lg:hidden'>
                        {registerMenu}
                        {LoginMenu}
                    </div>
                    <div className="dropdown lg:hidden">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden text-end">
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