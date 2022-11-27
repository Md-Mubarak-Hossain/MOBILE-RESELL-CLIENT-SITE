import React from 'react';
import useTitle from '../../components/Hooks/useTitle';
import Banner from '../Banner/Banner';
import Category from '../Categories/Category';
import Footer from '../shared/Footer/Footer';
import Advertise from './Adverties';
import Brand from './Brand';
import Offer from './Offer';
import Services from './Services';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Banner></Banner>
            <Advertise></Advertise>
            <Brand></Brand>
            <Category></Category>
            <Offer></Offer>
            <Services></Services>
            <Footer></Footer>
        </div >
    );
};

export default Home;