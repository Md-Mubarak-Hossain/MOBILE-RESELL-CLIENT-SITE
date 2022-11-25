import React from 'react';
import { Link } from 'react-router-dom';
import { MdAddShoppingCart } from 'react-icons/md';
import { AiTwotoneHome } from 'react-icons/ai';
import { GrUpdate } from 'react-icons/gr';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Products from '../Admin/Products';

const SellerDashBoard = () => {
    return (
        <div data-theme="light" className='lg:flex'>
            <ul className="menu bg-base-100 lg:w-56 p-2 rounded-box">
                <li>
                    <Link to='/seeAllProduct'>
                        <AiTwotoneHome></AiTwotoneHome>
                        <p className='text-primary w-32'>See Your Product</p>
                    </Link>
                </li>
                <li>
                    <Link to='/addproduct'>
                        <MdAddShoppingCart></MdAddShoppingCart>
                        <p className='text-primary w-32'>Add Your Product</p>
                    </Link>
                </li>
                <li>
                    <Link to='/updateScreen'>
                        <GrUpdate></GrUpdate>
                        <p className='text-primary w-32'>Update Product</p>
                    </Link >
                </li>
                <li>
                    <Link className='text-primary'>
                        <BsFillPersonLinesFill></BsFillPersonLinesFill>
                        <h2 className='text-primary'>See User</h2>
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

export default SellerDashBoard;