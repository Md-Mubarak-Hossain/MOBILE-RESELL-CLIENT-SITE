import React from 'react';
import useTitle from '../../components/Hooks/useTitle';
import Banner from '../Banner/Banner';
import Category from '../Categories/Category';
import Advertise from './Adverties';
import Brand from './Brand';
import Offer from './Offer';
import Services from './Services';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <div className="flex flex-col w-full lg:flex-row">
                <div className="grid flex-grow lg:m-0 lg:p-0 bg-base-300 rounded-box place-items-center lg:w-2/3">
                    <Banner></Banner>
                </div>
                <div className="lg:divider-horizontal w-0 divider-base-300 m-0 p-0"></div>
                <div className="hidden lg:grid lg:flex-grow lg:m-0 lg:p-0 bg-base-300 rounded-box place-items-center w-1/3 px-2">
                    <Advertise></Advertise>
                </div>
            </div>
            <Brand></Brand>
            <Category></Category>
            <Offer></Offer>
            <Services></Services>
        </div>
    );
};

export default Home;