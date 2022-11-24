import React from 'react';

const Category = () => {
    return (
        <div className='m-6 lg:m-16'>
            <div className='w-full text-center'>
                <h2 className='text-xl'>Categories</h2>
                <h2 className='text-3xl font-bold'>The Best Categories Re-Sale</h2>
            </div>
            <div className="flex flex-col w-full lg:flex-row">
                <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content</div>

                <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content</div>

                <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content</div>
            </div>
        </div>
    );
};

export default Category;