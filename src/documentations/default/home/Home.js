import React from 'react';
import useTitle from '../../../components/Hooks/useTitle';
import Category from '../../../pages/Categories/Category';
import Brand from './Brand';
import Offer from './Offer';
import Services from './Services';

const Home = () => {
    useTitle('Home');
    return (
        <>
            
            <Brand></Brand>
            <Category></Category>
            <Offer></Offer>
            <Services></Services>
        </>
    );
};

export default Home;