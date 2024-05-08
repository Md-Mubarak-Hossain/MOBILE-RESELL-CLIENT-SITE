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
             .then(() => { })
            .catch(err => console.error(err))
    }
    const LoginMenu = <>
        <div className="dropdown dropdown-hover relative">
            <li><label tabIndex={0} className="mr-1">Sign In</label></li>
            <ul tabIndex={0} className="dropdown-content p-1 w-48 md:top-12 right-0 bg-base-100 text-sm">
                <h2 className='text-warning'>Category:</h2>
                <li><Link className="hover:border-b" to='/adminlogin'>Admin Sign In</Link></li>
                <li><Link className="hover:border-b" to='/userdashboard/userlogin'>User Sign In</Link></li>
                <li><Link className="hover:border-b" to='/sellerlogin'>Seller Sign In</Link></li>
            </ul>
        </div>
    </>
    const registerMenu = <>
        <div className="dropdown dropdown-hover relative ">
            <li><label tabIndex={0} className="ml-1">Sign Up</label></li>
            <ul tabIndex={0} className="dropdown-content  p-2 bg-base-100 w-48 absolute md:top-12 md:right-0 text-sm">
                <h2 className="md:pt-5 text-warning">Category:</h2>
                <li><Link className='px-5 hover:border-b' to='/register'>User Sign Up</Link></li>
                <li><Link className='px-5 hover:border-b' to='/sellerRegister'>Seller Sign Up</Link></li>
            </ul>
        </div>
    </>
    const signOut = <li className='text-xs px-0 mx-0'> <Link to='/'><button onClick={() => logout()} className='btn btn-sm btn-ghost '>Log out</button></Link></li>
    const AdminDashboard =
        <>{
            admins?.map(admin => <li key={admin._id}>
                {user && user.uid?.includes("WfPgID7xMcQ02ZN9GEWCYBmO9WX2") && admin.email.includes("mubarak@gmail.com") ?
                    <>
                        <li className='md:text-xs mx-0 px-0'> <Link to='/admindashboard'>Admin Dashboard</Link></li>
                        {signOut}
                    </>
                    : <div className="hidden">
                    </div>}
            </li>)

        }
        </>

    const userDashboard = <>{
        users?.map(usr => <li key={usr._id}>
            {user && user.uid && usr.email?.includes(user.email) ?
                <>
                    <li className='md:text-xs mx-0 px-0 text-orange-400'>
                        <Link to='/userdashboard'>
                            User Dashboard</Link></li>
                    {signOut}
                </>
                : <div className="hidden">
                </div>}
        </li>)

    }
    </>
    const sellerDashboard = <>{
        sellers?.map(seller => <li key={seller._id}>
            {user && user.uid && seller.email?.includes(user.email) ?
                <>
                    <li className='md:text-xs mx-0 px-0'> <Link to='/sellerdashboard'>Seller Dashboard</Link></li>
                    {signOut}
                </>
                : <div className="hidden">
                </div>}
        </li>)

    }
    </>
    const login = <>
        {
            user && user.uid ?
                <div className="hidden"></div>
                :
                <div>
                    {registerMenu}
                    {LoginMenu}
                </div>
        }
    </>
    const mdMenubar = <>
        {AdminDashboard}
        {userDashboard}
        {sellerDashboard}
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/faq'>FAQ</Link></li>
        {login}
    </>
    const smMenubar = <>
        <li className='md:text-xs mx-0 px-0'><Link to='/'>Home</Link></li>
        <li className='md:text-xs mx-0 px-0'><Link to='/blog'>Blog</Link></li>
        <li className='md:text-xs mx-0 px-0'><Link to='/faq'>FAQ</Link></li>
        {AdminDashboard}
        {userDashboard}
        {sellerDashboard}
    </>
    return (
        <div className="navbar bg-night">
            <div className="navbar-start">
                <Link className="w-10 h-10 bg-gray-300 rounded-full flex justify-center items-center"><img src={logo} alt="Mobile Shop" className='w-8 h-8 rounded-full' /></Link>
                <h2 className='hidden md:flex capitalize md:font-semibold pl-2'>mobile reuser</h2>
            </div>
            <div className="navbar-end">
                <div className="hidden md:flex">
                    <ul className="menu menu-horizontal p-0">
                        {mdMenubar}
                    </ul>
                </div>
                <div className='flex md:hidden'>
                    <div className='flex md:hidden'>
                        {registerMenu}
                        {LoginMenu}
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