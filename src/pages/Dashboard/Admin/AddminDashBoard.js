import React from 'react';
import { Link } from 'react-router-dom';
import Products from './Products';
import { MdAddShoppingCart } from 'react-icons/md';
import { AiTwotoneHome } from 'react-icons/ai';
import { GrUpdate } from 'react-icons/gr';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const AddminDashBoard = () => {
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
                    <Link className='text-primary'>
                        <BsFillPersonLinesFill></BsFillPersonLinesFill>
                        <h2 className='text-primary'>All Seller</h2>
                    </Link>
                </li>
                <li>
                    <Link className='text-primary'>
                        <BsFillPersonLinesFill></BsFillPersonLinesFill>
                        <h2 className='text-primary'>All User</h2>
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