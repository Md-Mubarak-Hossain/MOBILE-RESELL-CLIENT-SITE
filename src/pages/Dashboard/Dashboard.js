import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../components/Hooks/useTitle';

const Dashboard = () => {
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
        <div className='w-full'>
            <div className='text-center mb-5'>
                <p className='text-xl lg:text-4xl font-bold'>The Second Hand Mobile Screen</p>
                <h2>Total Mobiles:{mobile.length}</h2>
            </div>
            <div className='grid grid-cols-1 gap-2 lg:grid-cols-4'>
                {
                    mobile.map(d => <div key={d._id} className="hero border">
                        <div className="hero-content flex-col p-2 w-full">
                            <div>
                                <img alt='img' src={d.picture} className=" rounded-lg shadow-xl w-24 h-32" />
                            </div>
                            <div>
                                <h1 className="text-xl font-bold">{d.name}</h1>
                                <p className="text-xl">Brand:{d.brand}</p>
                                <p className="text-xl">Category:{d.category}</p>
                                <p className="text-xl">Seller:{d.seller}</p>
                                {/* <p className="text-xl">Ram:{d.ram}</p>
                                <p className="text-xl">Camera:{d.camera}</p>
                                <p className="text-xl">Battery:{d.battery}</p>
                                <p className="text-xl">useTime:{d.useTime}</p>
                                <p className="text-xl">price:{d.price}</p>
                                <p className="text-xl">resalePrice:{d.resalePrice}</p>
                                <p className="text-xl">location:{d.location}</p> */}
                                <Link to={`/dashboard/deleteSellerProduct/${d._id}`}><button className="btn btn-primary btn-sm">X</button></Link>
                                <Link to={`/dashboard/updateSellerProduct/${d._id}`}> <button className="btn btn-primary btn-sm">update</button></Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};


export default Dashboard;