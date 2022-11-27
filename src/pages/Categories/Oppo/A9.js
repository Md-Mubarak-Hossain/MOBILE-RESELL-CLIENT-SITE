import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../components/Hooks/useTitle';
import { AuthContext } from '../../../ContextApi/Context';
import Spin from '../../account/Spinner/Spin';

const A9 = () => {
    useTitle('Oppo A9');
    const { loading } = useContext(AuthContext)
    const [mobile, setMobile] = useState([]);
    const [MobileData, setD] = useState([]);
    const { name, brand, ram, camera, useTime, price, resalePrice, category, seller, email,
        battery, picture, location } = MobileData;
    // const { data: Data, isLoading } = useQuery(
    //     {
    //         queryKey: ['Data'],
    //         queryFn: () => fetch('http://localhost:5000/mobile')
    //             .then(res => res.json())
    //     }
    // )

    useEffect(() => {
        fetch('http://localhost:5000/mobile')
            .then(res => res.json())
            .then(data => setMobile(data))
    }, [])
    console.log(mobile);
    console.log(MobileData);
    // data post
    const mobilePost = {
        name, brand, ram, camera, useTime, price, resalePrice, category, seller, email,
        battery, picture, location
    }
    console.log(mobilePost)
    const handleClick = () => {
        fetch('http://localhost:5000/wish', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(mobilePost)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    // form.reset();
                    alert('Added success')
                }
                else {
                    alert('sorry');
                }
            })
    }

    return (
        <div className='lg:m-16' >
            <div className='text-center lg:mb-5'>
                <p className='text-xl lg:text-4xl font-bold'>The Second Hand Mobile Screen</p>
                <p class='text-xl lg:text-4xl font-bold text-warning'>Brand: Oppo</p>
            </div>
            <div className='grid grid-cols-1 lg:gap-2 lg:grid-cols-2'>
                {
                    mobile.map(d => <div key={d._id} className="hero">
                        {
                            d.category?.includes("A9") ?
                                <div className="hero-content flex-col lg:flex-row p-2 lg:border w-full rounded-lg">
                                    <div>
                                        <img alt='img' src={d.picture} className=" rounded-lg shadow-xl h-72" />
                                    </div>
                                    <div>
                                        <h1 className="lg:text-xl font-bold">{d.name}</h1>
                                        <div className='grid gap-2 lg:gap-0 grid-cols-2 lg:grid-cols-1 w-full'>
                                            <p className="lg:text-xl">Brand:{d.brand}</p>
                                            <p className="lg:text-xl">Category:{d.category}</p>
                                            <p className="lg:text-xl">Seller:{d.seller}</p>
                                            <p className="lg:text-xl">Ram:{d.ram}</p>
                                            <p className="lg:text-xl">Camera:{d.camera}</p>
                                            <p className="lg:text-xl">Battery:{d.battery}</p>
                                            <p className="lg:text-xl">useTime:{d.useTime}</p>
                                            <p className="lg:text-xl">price:{d.price}</p>
                                            <p className="lg:text-xl">resalePrice:{d.resalePrice}</p>
                                            <p className="lg:text-xl">location:{d.location}</p>
                                        </div>
                                        <Link to={`/payment/${d._id}`}> <button className="btn btn-primary btn-sm">Buy Now</button></Link>
                                        <Link> <button onClick={() => handleClick(setD(d))} className="btn btn-primary btn-sm">Add Wish List</button></Link>
                                    </div>
                                </div>
                                : <>
                                </>
                        }
                    </div>)
                }
            </div>
        </div >
    );
};
export default A9;