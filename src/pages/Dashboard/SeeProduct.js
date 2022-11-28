import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../components/Hooks/useTitle';

const SeeProduct = () => {
    useTitle('See Product');
    const [mobile, setMobile] = useState([]);
    // const { data: Data, isLoading } = useQuery(
    //     {
    //         queryKey: ['Data'],
    //         queryFn: () => fetch('https://mobile-server.vercel.app/mobile')
    //             .then(res => res.json())
    //     }
    // )
    useEffect(() => {
        fetch('https://mobile-server.vercel.app/mobile')
            .then(res => res.json())
            .then(data => setMobile(data))
    }, [])
    console.log(mobile);
    return (
        <div className='lg:m-16'>
            <div className='text-center mb-5'>
                <p className='text-xl lg:text-2xl font-bold'>The Second Hand Mobile Screen</p>
                <h2>Total Mobiles:{mobile.length}</h2>
            </div>
            <div className='grid grid-cols-1 gap-2 lg:grid-cols-4'>
                {
                    mobile.map(d => <div key={d._id} className="hero border">
                        <div className="hero-content flex-col p-2">
                            <div>
                                <img alt='img' src={d.picture} className=" rounded-lg shadow-xl w-24 h-32" />
                            </div>
                            <div>
                                <h1 className="text-xs font-bold">{d.name}</h1>
                                <p className="text-xs">Brand:{d.brand}</p>
                                <p className="text-xs">Category:{d.category}</p>
                                <p className="text-xs">Seller:{d.seller}</p>
                                {/* <p className="text-xs">Ram:{d.ram}</p>
                                <p className="text-xs">Camera:{d.camera}</p>
                                <p className="text-xs">Battery:{d.battery}</p>
                                <p className="text-xs">useTime:{d.useTime}</p>
                                <p className="text-xs">price:{d.price}</p>
                                <p className="text-xs">resalePrice:{d.resalePrice}</p>
                                <p className="text-xs">location:{d.location}</p> */}
                                <Link to={`/dashboard/deleteSellerProduct/${d._id}`}><button className="btn btn-outline btn-primary btn-sm">X</button></Link>
                                <Link to={`/dashboard/updateSellerProduct/${d._id}`}> <button className="btn btn-outline btn-primary btn-sm">update</button></Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div >
    );
};


export default SeeProduct;