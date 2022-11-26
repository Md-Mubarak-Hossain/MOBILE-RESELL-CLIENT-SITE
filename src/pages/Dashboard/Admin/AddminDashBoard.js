import React from 'react';
import { Link } from 'react-router-dom';
import Products from './Products';
import { MdAddShoppingCart } from 'react-icons/md';
import { AiTwotoneHome } from 'react-icons/ai';
import { GrUpdate } from 'react-icons/gr';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import useTitle from '../../../components/Hooks/useTitle';

const AddminDashBoard = () => {
    useTitle('Admin DashBoard');
    return (
        <div data-theme="light" className='lg:flex'>
            <ul className="menu bg-base-100 lg:w-56 p-2 rounded-box">
                <li>
                    <Link to='/seeAllProducts'>
                        <AiTwotoneHome></AiTwotoneHome>
                        <p className='text-primary w-32'>See products</p>
                    </Link>
                </li>
                <li>
                    <Link to='/addproducts'>
                        <MdAddShoppingCart></MdAddShoppingCart>
                        <p className='text-primary w-32'>Add product</p>
                    </Link>
                </li>
                <li>
                    <Link to='/goOther'>
                        <GrUpdate></GrUpdate>
                        <p className='text-primary w-32'>Update Product</p>
                    </Link >
                </li>
                <li>
                    <Link to='/Seller' className='text-primary'>
                        <BsFillPersonLinesFill></BsFillPersonLinesFill>
                        <p className='text-primary'>All Seller</p>
                    </Link>
                </li>
                <li>
                    <Link to='/User' className='text-primary'>
                        <BsFillPersonLinesFill></BsFillPersonLinesFill>
                        <p className='text-primary'>All User</p>
                    </Link>
                </li>
            </ul>
            <div className="flex w-full">
                <div className="divider lg:divider-horizontal"></div>
                <div className="grid w-4/5 flex-grow  place-items-center">
                    <Products></Products>
                </div>
            </div>
        </div >
    );
};

export default AddminDashBoard;