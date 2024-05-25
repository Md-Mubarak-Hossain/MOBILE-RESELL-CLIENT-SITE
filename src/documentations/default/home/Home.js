import React from 'react';
import useTitle from '../../../components/Hooks/useTitle';
import Category from '../../../pages/Categories/Category';
import Offer from './Offer';
import Services from './Services';
import BuyProduct from '../../../pages/products/BuyProduct';
import Banner from './Banner';

const Home = () => {
    useTitle('Home');
    return (
        <>  <Banner/>
            <BuyProduct/>
            <Category></Category>
            <Offer></Offer>
            <Services></Services>
        </>
    );
};

export default Home;