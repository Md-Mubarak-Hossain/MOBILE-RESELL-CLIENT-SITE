import React from 'react';
import useTitle from '../../components/Hooks/useTitle';
import Banner from '../Banner/Banner';
import Category from '../Categories/Category';
import Footer from '../shared/Footer/Footer';
import Brand from './Brand';
import Offer from './Offer';
import Services from './Services';

const Home = () => {
    useTitle('Home');
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