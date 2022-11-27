import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import logo from '../../../assets/logo2.png';
import { AuthContext } from '../../../ContextApi/Context';

const Navbar = () => {
    const sellers = useLoaderData()
    console.log(sellers);
    const { user, logOut } = useContext(AuthContext);
    const logout = () => {
        logOut()
            .then(result => { })
            .catch(err => console.error(err))
    }
    const LoginMenu = <>
        <div className="dropdown dropdown-hover relative">
            <label tabIndex={0} className="btn my-1">Login</label>
            <ul tabIndex={0} className="dropdown-content rounded-box p-1 shadow w-52 absolute top-20 right-1 place-items-center text-black bg-base-100 ">
                <h2 className='text-warning'>Select a Category </h2>
                <li><Link to='/adminlogin'><button className='btn btn-outline btn-warning'>Admin Login</button></Link></li>
                <li><Link to='/sellerlogin'><button className='btn btn-outline btn-warning'>Seller Login</button></Link></li>
                <li><Link to='/userlogin'><button className='btn btn-outline btn-warning'>User Login</button></Link></li>
            </ul>
        </div>
    </>
    const registerMenu = <>
        <div className="dropdown dropdown-hover relative">
            <label tabIndex={0} className="btn m-1">Register</label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100  rounded-box w-52 absolute top-20 text-center place-items-center">
                <h2 className='text-warning'>Select a Category </h2>
                <li><Link to='/register'><button className='btn btn-outline btn-warning'>User</button></Link></li>
                <li><Link to='/sellerRegister'><button className='btn btn-outline btn-warning'>Seller</button></Link></li>
            </ul>
        </div>
    </>
    const AdminDashboard =
        <>
            {
                user && user.uid && user.email?.includes("mubarak@gmail.com") ?
                    <>
                        <li> <Link to='/admindashboard'>Admin Dashboard</Link></li>
                    </>
                    : <>
                    </>
            }
        </>


    const UserDashboard =
        <>
            {
                user && user.uid && !user?.email.includes("mubarak@gmail.com") ?
                    <>
                        <li><Link to='/userdashboard'>User Dashboard</Link ></li>
                        <li><Link to='/wishlist'>AddWishList</Link ></li>

                    </>
                    : <>
                    </>
            }
        </>
    const login = <>
        {
            user && user.uid ?
                <li><Link to='/'><button onClick={() => logout()} className='btn btn-sm btn-ghost'>Log out</button></Link></li>
                :
                <>
                    {registerMenu}
                    {LoginMenu}
                </>

        }
    </>

    const sellerDashboard = <>{
        sellers?.map(seller => < li key={seller._id}>
            {user && user.uid && seller?.email.incluses(user.email) ?
                < Link to='/sellerdashboard'>Seller Dashboard</Link >
                : <>
                </>
            }
        </li>)

    }
    </>


    const menubar = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        {AdminDashboard}
        {sellerDashboard}
        {UserDashboard}
        <li>{login}</li>
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