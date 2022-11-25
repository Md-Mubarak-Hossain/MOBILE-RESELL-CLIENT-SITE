import React from 'react';

const Spin = () => {
    return (
        <div className='w-full flex flex-col justify-center items-center bg-white'>
            <p className='w-full text-center'>
                <button className="btn border-0 loading h-72 bg-white text-black ">loading...</button>
            </p>
        </div>
    );
};

export default Spin;