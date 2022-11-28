import React from 'react';
import { Link } from 'react-router-dom';
import { MdAddShoppingCart } from 'react-icons/md';
import { SiFampay } from 'react-icons/si';
import { BiCreditCard } from 'react-icons/bi';
import useTitle from '../../components/Hooks/useTitle';
import BuyProductScreen from './BuyProductScreen';
import Footer from '../shared/Footer/Footer';

const BuyerDashBoard = () => {
    useTitle('Buyer Dashboard');
    return (
        <>
            <div data-theme="light" className='flex flex-col lg:flex-row'>
                <div className='px-5 bg-base-300'>
                    <ul className="menu  lg:w-48 p-2 rounded-box">
                        <li>
                            <Link to='/userdashboard/buyerProduct'>
                                <BiCreditCard></BiCreditCard>
                                <p className='text-primary w-32'>Buy Product</p>
                            </Link>
                        </li>
                        <li>
                            <Link to='/userdashboard/wishlist'>
                                <MdAddShoppingCart></MdAddShoppingCart>
                                <p className='text-primary w-32'>Add WishList</p>
                            </Link>
                        </li>
                        <li>
                            <Link to='/uerdashboard/wishlist'>
                                <SiFampay></SiFampay>
                                <p className='text-primary w-32'>Payment now</p>
                            </Link >
                        </li>
                    </ul>
                </div>
                <div className='divider'></div>
                <div className='flex-grow mb-5'>
                    <BuyProductScreen></BuyProductScreen>
                    <Link to='/userdashboard/buyerProduct'><button className='btn btn-link'>See more</button></Link>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default BuyerDashBoard;