import React from 'react';
import useTitle from '../../../components/Hooks/useTitle';
import Category from '../../../pages/Categories/Category';
import Offer from './Offer';
import Services from './Services';
import BuyProduct from '../../../pages/products/BuyProduct';

const Home = () => {
    useTitle('Home');
    return (
        <>
            <BuyProduct/>
            {/* <Brand></Brand> */}
            <Category></Category>
            <Offer></Offer>
            <Services></Services>
        </>
    );
};

export default Home;