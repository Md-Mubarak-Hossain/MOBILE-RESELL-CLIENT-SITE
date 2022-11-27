import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../components/Hooks/useTitle';

const BuyProductScreen = () => {
    useTitle('Buy Product');
    const [mobile, setMobile] = useState([]);
    const [MobileData, setD] = useState([]);
    const { name, brand, ram, camera, useTime, price, resalePrice, category, seller, email,
        battery, picture, location } = MobileData;
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
        <div className='lg:my-16' >
            <div className='text-center lg:mb-5'>
                <p className='text-xl lg:text-3xl font-bold'>The Second Hand Mobile Screen</p>
                <p class='text-xl font-bold'>Total:{mobile.length}</p>
            </div>
            <div className='grid grid-cols-1  lg:grid-cols-4'>
                {
                    mobile.slice(0, 8).map(d => <div key={d._id} className="hero mb-10">

                        <div className="hero-content flex-col  p-1  w-full rounded-lg">
                            <div>
                                <img alt='img' src={d.picture} className="rounded-lg shadow-xl w-32 h-40" />
                            </div>
                            <div>
                                <h1 className="lg:text-xs text-xl font-bold">{d.name}</h1>
                                <div className='grid   grid-cols-1  w-full'>
                                    <p className="lg:text-xs text-xl">Brand:{d.brand}</p>

                                    {/* <p className="lg:text-xs text-xl">Seller:{d.seller}</p>
                                            <p className="lg:text-xs text-xl">Ram:{d.ram}</p>
                                            <p className="lg:text-xs text-xl">Camera:{d.camera}</p>
                                            <p className="lg:text-xs text-xl">Battery:{d.battery}</p>
                                            <p className="lg:text-xs text-xl">useTime:{d.useTime}</p>
                                            <p className="lg:text-xs text-xl">location:{d.location}</p> */}
                                    <p className="lg:text-xs text-xl">price:{d.price}</p>
                                    <p className="lg:text-xs text-xl">resalePrice:{d.resalePrice}</p>
                                    <Link to={`/payment/${d._id}`}> <button className="badge badge-primary btn-outline btn-xs text-xs ">Buy Now</button></Link>
                                    <Link> <button onClick={() => handleClick(setD(d))} className="badge badge-primary btn-outline btn-xs text-xs">Add Wish List</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};


export default BuyProductScreen;