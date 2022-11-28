import React from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { MdAddShoppingCart } from 'react-icons/md';
import { SiFampay } from 'react-icons/si';
import { BiCreditCard } from 'react-icons/bi';
import { VscThreeBars } from 'react-icons/vsc';
import Footer from '../../pages/shared/Footer/Footer';
import UserNav from '../../pages/shared/Navbar/UserNav';

const UserLayOut = () => {
    return (
        <div>
            <UserNav></UserNav>
            <p className='ml-4'>
                <label htmlFor="sideNav" className="lg:hidden "><VscThreeBars></VscThreeBars></label>
            </p>
            <div data-theme="light" className="drawer drawer-mobile w-full">
                <input id="sideNav" type="checkbox" className="drawer-toggle w-0 h-0" />
                <div className="drawer-content w-full m-0">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="sideNav" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-40 bg-base-100 text-base-content place-items-center">
                        <li>
                            <Link to='/userdashboard/buyerProduct'>
                                <BiCreditCard></BiCreditCard>
                                <p className='text-primary w-32 text-sm'>Buy Product</p>
                            </Link>
                        </li>
                        <li>
                            <Link to='/userdashboard/wishlist'>
                                <MdAddShoppingCart></MdAddShoppingCart>
                                <p className='text-primary w-32 text-sm'>Add WishList</p>
                            </Link>
                        </li>
                        <li>
                            <Link to='/userdashboard/wishlist'>
                                <SiFampay></SiFampay>
                                <p className='text-primary w-32 text-sm'>Payment now</p>
                            </Link >
                        </li>
                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div >
    );
};

export default UserLayOut;