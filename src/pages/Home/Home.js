import React from 'react';
import DataGet from '../../components/Practice/DataGet';
import Banner from '../Banner/Banner';
import Category from '../Categories/Category';
import Footer from '../shared/Footer/Footer';
import Adverties from './Adverties';
import Brand from './Brand';
import Offer from './Offer';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Brand></Brand>
            <Services></Services>
            <Offer></Offer>
            <Footer></Footer>
        </div >
    );
};

export default Home;