import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../../pages/shared/Footer/Footer';
import Navbar from '../../../pages/shared/Navbar/Navbar';
import Advertise from '../home/Adverties';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='py-14 mx-auto'>
                <Advertise></Advertise>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;