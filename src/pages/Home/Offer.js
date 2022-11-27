import React from 'react';
import useTitle from '../../components/Hooks/useTitle';
import oppo from '../../../src/pages/Home/Offer/oppo.jpg';
import vivo from '../../../src/pages/Home/Offer/vivo.jpg';
import infinix from '../../../src/pages/Home/Offer/infinix.jpg';
const Offer = () => {
    useTitle('Offer Page');
    return (
        <div className='m-6 lg:m-16'>
            <div className='py-6'>
                <h2 className='text-xl badge badge-primary'>Offer</h2>
                <h2 className='text-4xl'>Resale Great Offer!!!</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
                <div className="card  bg-base-100 shadow-xl">
                    <figure><img src={vivo} alt="img" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Offer! Offer!! Offer!!!
                            <div className="badge badge-secondary">NEW</div>
                        </h2>

                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">See offer</div>
                            <div className="badge badge-outline">Vivo Brand</div>
                        </div>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <figure><img src={oppo} alt="img" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Offer! Offer!! Offer!!!
                            <div className="badge badge-secondary">NEW</div>
                        </h2>

                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">See Offer</div>
                            <div className="badge badge-outline">Oppo Brand</div>
                        </div>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <figure><img src={infinix} alt="img" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Offer! Offer!! Offer!!!
                            <div className="badge badge-secondary">NEW</div>
                        </h2>

                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">See Offer</div>
                            <div className="badge badge-outline">InfinixHot Brand</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offer;