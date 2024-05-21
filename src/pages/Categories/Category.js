import React from 'react';
import { Link } from 'react-router-dom';
import A5 from '../../assets/A5.jpg';
import A9 from '../../assets/A9.png';
import F7 from '../../assets/F7.jpg';
const Category = () => {
    const category=[
        {id:1, to:'A5', src:A5,content:'See Oppo A5 Products'},
        {id:2, to:'A9', src:A9,content:'See Oppo A9 Products'},
        {id:3, to:'F7', src:F7,content:'See Oppo F7 Products'}
    ]
    return (
        <div className='m-6 md:m-16'>
            <div className='w-full text-center my-5'>
                <h2 className='text-xl'>Oppo Categories</h2>
                <h2 className='text-2xl font-bold'>The Best Categories Re-Sale</h2>
            </div>
            <div className="flex flex-col w-full md:flex-row gap-2">
                {
                    category?.map(ct=><div className="p-2 md:w-1/3  border-2 border-dotted rounded-lg p-2">
                    <img src={ct?.src} alt="img" className='w-fit h-56 rounded-lg px-1 mx-auto' />
                    <Link to={ct?.to} className='btn btn-sm btn-outline w-full px-2 my-2'>{ct?.content}
                    </Link>
                </div>)
                }
               
            </div>
        </div>
    );
};

export default Category;