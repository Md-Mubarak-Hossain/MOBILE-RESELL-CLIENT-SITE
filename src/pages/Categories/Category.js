import React from 'react';
import { Link } from 'react-router-dom';
import A5 from '../../assets/A5.jpg';
import A9 from '../../assets/A9.jpg';
import F7 from '../../assets/F7.webp';
const Category = () => {
    return (
        <div className='m-6 lg:m-16'>
            <div className='w-full text-center'>
                <h2 className='text-xl'>Oppo Categories</h2>
                <h2 className='text-3xl font-bold'>The Best Categories Re-Sale</h2>
            </div>
            <div className="flex flex-col w-full lg:flex-row">
                <div className="p-2 grid lg:w-1/3  flex-grow  card  place-items-center">
                    <img src={A5} alt="img" className='w-full h-56 rounded-lg' />
                    <Link to='/A5'><button className='btn btn-outline btn-warning w-full'>See Oppo A5 Products</button></Link>
                </div>
                <div className="p-2 grid lg:w-1/3  flex-grow  card  place-items-center">
                    <img src={A9} alt="img" className='w-full h-56 rounded-lg' />
                    <Link to='/A9'><button className='btn btn-outline btn-warning w-full'>See Oppo A9 Products</button></Link>
                </div>
                <div className="p-2 grid lg:w-1/3  flex-grow  card  place-items-center">
                    <img src={F7} alt="img" className='w-full h-56 rounded-lg' />
                    <Link to='/F7'><button className='btn btn-outline btn-warning w-full'>See Oppo F7 Products</button></Link></div>
            </div>
        </div >
    );
};

export default Category;