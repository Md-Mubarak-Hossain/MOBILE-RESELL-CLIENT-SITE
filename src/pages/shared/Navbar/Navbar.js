import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo2.png';
import { AdminAuth } from '../../../ContextApi/AdminContext';
import { AuthContext } from '../../../ContextApi/Context';
const Navbar = () => {
    const { admins } = useContext(AdminAuth)
    const { user, logOut } = useContext(AuthContext);
    const logout = () => {
        logOut()
             .then(() => { })
            .catch(err => console.error(err))
    }
    const account = <>
        <li><Link className='px-5 hover:border-b' to='/register'>Sign Up</Link></li>
        <div className="dropdown dropdown-hover relative">
            <label tabIndex={0} className="mr-1">Sign In</label>
            <ul tabIndex={0} className="dropdown-content p-1 w-48 md:top-12 right-0 bg-base-100 text-sm">
                <li><Link className="hover:border-b" to='/adminlogin'>Admin Sign In</Link></li>
                <li><Link className="hover:border-b" to='/login'>User Sign In</Link></li>
            </ul>
        </div>
    </>
   
    const signOut = <li className='text-xs px-0 mx-0'> <Link to='/'><button onClick={() => logout()} className='btn btn-sm btn-ghost '>Log out</button></Link></li>
    const AdminDashboard =
        <>{
            admins?.map(admin => <li key={admin._id}>
                {user && user?.uid?.includes("WfPgID7xMcQ02ZN9GEWCYBmO9WX2") && admin?.email.includes("mubarak@gmail.com") ?
                    <>
                        <li className='md:text-xs'> <Link to='/admindashboard'>Admin Dashboard</Link></li>
                        {signOut}
                    </>
                    : <>
                    </>}
            </li>)

        }
        </>
    
    const mdMenubar = <>
        {AdminDashboard}
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/faq'>Faq</Link></li>
        {user && user?.uid ?<></>:<div className='flex justify-center items-center'>{account}</div>}
    </>
    const smMenubar = <>
        <li className='md:text-xs mx-0 px-0'><Link to='/'>Home</Link></li>
        <li className='md:text-xs mx-0 px-0'><Link to='/blog'>Blog</Link></li>
        <li className='md:text-xs mx-0 px-0'><Link to='/faq'>Faq</Link></li>
        {AdminDashboard}
    </>
    return (
        <div className="navbar">
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