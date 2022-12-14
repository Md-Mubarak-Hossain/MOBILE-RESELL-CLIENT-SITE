// import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../components/Hooks/useTitle';

const AdminOppo = () => {
    useTitle('Oppo Brand');
    const [mobile, setMobile] = useState([]);
    useEffect(() => {
        fetch('https://mobile-server.vercel.app/mobile')
            .then(res => res.json())
            .then(data => setMobile(data))
    }, [])
    return (
        <div data-theme='light' className='w-full'>
            <div className='text-center lg:mb-5'>
                <p className='text-xs lg:text-3xl font-bold'>The Second Hand Mobile Screen</p>
                <p class='text-xs lg:text-2xl font-bold'>Brand: Oppo</p>
            </div>
            <form className='grid grid-cols-1 lg:grid-cols-5'>
                {
                    mobile.map(d => <div key={d._id} className="hero">
                        {
                            d.brand?.includes("Oppo") ?
                                <div className="card place-items-center p-2 w-full rounded-lg">
                                    <div>
                                        <img alt='img' src={d.picture} className=" rounded-lg shadow-xl w-32 h-40" />
                                    </div>
                                    <div>
                                        <h1 className="lg:text-xs font-bold">{d.name}</h1>
                                        <div className='grid gap-2 lg:gap-0 grid-cols-2 lg:grid-cols-1 w-full'>
                                            <p className="lg:text-xs">Brand:{d.brand}</p>
                                            <p className="lg:text-xs">Category:{d.category}</p>
                                            <p className="lg:text-xs">Seller:{d.seller}</p>
                                            <p className="lg:text-xs">Ram:{d.ram}</p>
                                            <p className="lg:text-xs">Camera:{d.camera}</p>
                                            <p className="lg:text-xs">Battery:{d.battery}</p>
                                            <p className="lg:text-xs">useTime:{d.useTime}</p>
                                            <p className="lg:text-xs">price:{d.price}</p>
                                            <p className="lg:text-xs">resalePrice:{d.resalePrice}</p>
                                            <p className="lg:text-xs">location:{d.location}</p>
                                        </div>
                                        <Link to={`/admindashboard/update/${d._id}`}> <button className="btn btn-outline btn-primary btn-xs">update</button></Link>
                                    </div>
                                </div>
                                : <>
                                </>
                        }
                    </div>)
                }
            </form>
        </div >
    );
};

export default AdminOppo;