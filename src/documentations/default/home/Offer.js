import React from 'react';
import useTitle from '../../../components/Hooks/useTitle';
import { infinix, oppo, vivo } from '../../../components/Image';

const Offer = () => {
    useTitle('Offer Page');
    const offer = [
        { id: 1, brand: "Vivo Brand", img: infinix },
        { id: 2, brand: "Vivo Brand", img: oppo },
        { id: 3, brand: "Vivo Brand", img: vivo }
    ]
    return (
        <div className='m-6 md:m-16'>
            <div className='py-6'>
                <h2 className='text-xl badge badge-primary'>Offer</h2>
                <h2 className='text-2xl'>Resale Great Offer!!!</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
                {
                    offer?.map(off => <div className="bg-gray-600 py-4 shadow-xl rounded-lg">
                        <figure><img src={off?.img} alt={off?.brand} className='w-56 h-56 mx-auto rounded-lg' /></figure>
                        <div className="card-body">
                            <div className="badge badge-primary">NEW</div>
                            <h2 className="card-title">
                                Offer! Offer!! Offer!!!
                            </h2>
                            <div className="flex justify-between">
                                <div className="badge badge-outline">See offer</div>
                                <div className="badge badge-outline">{off?.brand}</div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Offer;