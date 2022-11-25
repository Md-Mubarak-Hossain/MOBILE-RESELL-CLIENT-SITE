import React from 'react';
import useTitle from '../../components/Hooks/useTitle';

const Offer = () => {
    useTitle('Offer Page');
    return (
        <div className='m-6 lg:m-16'>
            <div className='py-6'>
                <h2 className='text-xl'>Offer</h2>
                <h2 className='text-4xl'>Now the resale great Offer!!!</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
                <div className="card  bg-base-100 shadow-xl">
                    <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRDTV55m6_ba_CPvOuskTBygXFXDRgKeb_5g&usqp=CAU" alt="img" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Offer! Offer!! Offer!!!
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRDTV55m6_ba_CPvOuskTBygXFXDRgKeb_5g&usqp=CAU" alt="img" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Offer! Offer!! Offer!!!
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRDTV55m6_ba_CPvOuskTBygXFXDRgKeb_5g&usqp=CAU" alt="img" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Offer! Offer!! Offer!!!
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offer;