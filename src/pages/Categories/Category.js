import React from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
    return (
        <div className='m-6 lg:m-16'>
            <div className='w-full text-center'>
                <h2 className='text-xl'>Categories</h2>
                <h2 className='text-3xl font-bold'>The Best Categories Re-Sale</h2>
            </div>
            <div className="flex flex-col w-full lg:flex-row">
                <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
                    <Link to='/A5'><button className='btn btn-outline'>A5</button></Link>
                </div>

                <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
                    <Link to='/A9'><button className='btn btn-outline'>A9</button></Link>
                </div>

                <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center"><Link to='/F7'><button className='btn btn-outline'>F7</button></Link></div>
            </div>
        </div >
    );
};

export default Category;