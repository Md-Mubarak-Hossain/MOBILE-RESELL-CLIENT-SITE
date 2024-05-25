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
                <Outlet></Outlet>
            </div> 
           <Footer></Footer>
        </div>
    );
};

export default Main;