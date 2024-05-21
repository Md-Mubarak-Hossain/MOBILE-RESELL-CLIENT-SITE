import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { MdAddShoppingCart } from 'react-icons/md';
import { AiTwotoneHome } from 'react-icons/ai';
import { GrUpdate } from 'react-icons/gr';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { VscThreeBars } from 'react-icons/vsc';
import Footer from '../../../pages/shared/Footer/Footer';
import AdminNav from '../../../pages/shared/Navbar/AdminNav';

const AdminLayout = () => {
    return (
        <div>
            <AdminNav></AdminNav>
            <p className='ml-4'>
                <label htmlFor="sideNav" className="md:hidden"><VscThreeBars></VscThreeBars></label>
            </p>
            <div data-theme="light">
                <div className="drawer drawer-mobile">
                    <input id="sideNav" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content w-full">
                        <Outlet></Outlet>
                    </div>
                    <div data-theme='night' className="drawer-side">
                        <label htmlFor="sideNav" className="drawer-overlay"></label>
                        <ul className="menu p-2 w-40 bg-base-100 text-base-content">
                            <li>
                                <Link to='/admindashboard/seeAllProducts'>
                                    <AiTwotoneHome></AiTwotoneHome>
                                    <p className='text-primary text-sm w-32'>See products</p>
                                </Link>
                            </li>
                            <li>
                                <Link to='/admindashboard/addproducts'>
                                    <MdAddShoppingCart></MdAddShoppingCart>
                                    <p className='text-primary text-sm w-32'>Add product</p>
                                </Link>
                            </li>
                            <li>
                                <Link to='/admindashboard/goOther'>
                                    <GrUpdate></GrUpdate>
                                    <p className='text-primary text-sm w-32'>Update Product</p>
                                </Link >
                            </li>
                            <li>
                                <Link to='/admindashboard/Seller' className='text-primary text-sm'>
                                    <BsFillPersonLinesFill></BsFillPersonLinesFill>
                                    <p className='text-primary text-sm'>Seller</p>
                                </Link>
                            </li>
                            <li>
                                <Link to='/admindashboard/User' className='text-primary text-sm'>
                                    <BsFillPersonLinesFill></BsFillPersonLinesFill>
                                    <p className='text-primary text-sm'>User</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div >
            </div>
            <Footer></Footer>
        </div >
    );
};
export default AdminLayout;