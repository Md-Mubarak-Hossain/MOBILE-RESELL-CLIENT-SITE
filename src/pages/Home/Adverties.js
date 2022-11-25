import React from 'react';
import home from '../../assets/home.jpg';

const Adverties = () => {
    return (
        <div className='m-6 lg:m-16 text-center'>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img src={home} alt="Shoes" className='w-full h-80' /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Adverties;