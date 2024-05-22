import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../../pages/shared/Footer/Footer';
import Navbar from '../../../pages/shared/Navbar/Navbar';
import Advertise from '../home/Adverties';

const Main = () => {
    return (
        <div className='relative'>
            <Navbar></Navbar>
            <div className='pt-14 mx-auto'>
                <Advertise></Advertise>
                <div><Outlet></Outlet></div>
            </div>
            <div className='z-20'><Footer></Footer></div>
        </div>
    );
};

export default Main;