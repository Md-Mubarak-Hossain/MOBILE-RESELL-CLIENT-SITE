import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { MdAddShoppingCart } from 'react-icons/md';
import { AiTwotoneHome } from 'react-icons/ai';
import { GrUpdate } from 'react-icons/gr';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { VscThreeBars } from 'react-icons/vsc';
import Footer from '../../pages/shared/Footer/Footer';
import Navbar from '../../pages/shared/Navbar/SellerNav';
const SellerLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <p className='ml-4'>
                <label htmlFor="sideNav" className="lg:hidden"><VscThreeBars></VscThreeBars></label>
            </p>
            <div data-theme='light' className="drawer drawer-mobile">
                <input id="sideNav" type="checkbox" className="drawer-toggle w-0 h-0" />
                <div className="drawer-content w-full">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="sideNav" className="drawer-overlay"></label>
                    <ul className="menu px-2 w-40 bg-base-100 text-base-content place-items-center text-sm">
                        <li>
                            <Link to='/sellerdashboard/seeAllProduct'>
                                <AiTwotoneHome></AiTwotoneHome>
                                <p className='text-primary w-32'>See Product</p>
                            </Link>
                        </li>
                        <li>
                            <Link to='/sellerdashboard/addproduct'>
                                <MdAddShoppingCart></MdAddShoppingCart>
                                <p className='text-primary w-32'>Add Product</p>
                            </Link>
                        </li>
                        <li>
                            <Link to='/sellerdashboard/updateScreen'>
                                <GrUpdate></GrUpdate>
                                <p className='text-primary w-32'>Update Product</p>
                            </Link >
                        </li>
                        <li>
                            <Link to='/sellerdashboard/users' className='text-primary'>
                                <BsFillPersonLinesFill></BsFillPersonLinesFill>
                                <h2 className='text-primary'>See User</h2>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <Footer></Footer>
        </div >
    );
};

export default SellerLayout;