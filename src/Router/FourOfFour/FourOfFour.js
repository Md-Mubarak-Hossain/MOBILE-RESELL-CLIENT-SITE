import React from 'react';
import four from '../../assets/404.jpg';
import { AiOutlineHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const FourOfFour = () => {
    return (
        <div className='w-full'>
            <img src={four} alt="img" className='w-full' />
            <p><Link to='/'><button className='btn btn-outline btn-warning btn-sm'>Return Home <AiOutlineHome></AiOutlineHome></button></Link></p>
        </div >
    );
};

export default FourOfFour;