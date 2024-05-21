import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../components/Hooks/useTitle';
import Spin from '../../../pages/account/Spinner/Spin';

const Products = () => {
    useTitle('Products');
    const { isLoading, data: mobile } = useQuery({
        queryKey: ['mobile'],
        queryFn: () =>
            fetch('https://mobile-server.vercel.app/mobile')
                .then(res => res.json())
    })
    if (isLoading) return <Spin></Spin >
    console.log(mobile);
    return (
        <div data-theme='light' className='w-full'>
            <div className='text-center mb-5'>
                <p className='text-xl md:text-4xl font-bold'>The Second Hand Mobile Screen</p>
                <h2>Total Mobiles:{mobile?.length}</h2>
            </div>
            <div>
                {
                    mobile?.slice(0, 3).map(d => <div key={d._id} className="hero  my-5 w-full">
                        <div className="hero-content flex-col md:flex-row p-2 w-full">
                            <div>
                                <img alt='img' src={d.picture} className=" rounded-lg shadow-xl h-96" />
                            </div>
                            <div>
                                <h1 className="text-xl font-bold">{d.name}</h1>
                                <p className="text-xl">Brand:{d.brand}</p>
                                <p className="text-xl">Category:{d.category}</p>
                                <p className="text-xl">Seller:{d.seller}</p>
                                <p className="text-xl">Ram:{d.ram}</p>
                                <p className="text-xl">Camera:{d.camera}</p>
                                <p className="text-xl">Battery:{d.battery}</p>
                                <p className="text-xl">useTime:{d.useTime}</p>
                                <p className="text-xl">price:{d.price}</p>
                                <p className="text-xl">resalePrice:{d.resalePrice}</p>
                                <p className="text-xl">location:{d.location}</p>
                                <Link to={`/admindashboard/delete/${d._id}`}><button className="btn btn-outline btn-primary btn-sm mx-2">X</button></Link>
                                <Link to={`/admindashboard/update/${d._id}`}> <button className="btn btn-outline btn-primary btn-sm">update</button></Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <div className='w-full'>
                <Link to='/admindashboard/seeAllProducts'><button className='btn btn-link btn-primary w-full'>See more</button></Link>
            </div>
        </div >
    );
};

export default Products;