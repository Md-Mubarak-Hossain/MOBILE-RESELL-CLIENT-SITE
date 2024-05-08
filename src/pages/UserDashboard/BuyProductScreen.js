import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../components/Hooks/useTitle';

const BuyProductScreen = () => {
    useTitle('Buy Product');
    const [mobile, setMobile] = useState([]);
    const [MobileData, setD] = useState([]);
    const { name, brand, ram, camera, useTime, price, resalePrice, category, seller, email,
        battery, picture, location } = MobileData;
    useEffect(() => {
        fetch('https://mobile-server.vercel.app/mobile')
            .then(res => res.json())
            .then(data => setMobile(data))
    }, [])
    // console.log(mobile);
    // console.log(MobileData);
    // data post
    const mobilePost = {
        name, brand, ram, camera, useTime, price, resalePrice, category, seller, email,
        battery, picture, location
    }
    // console.log(mobilePost)
    const handleClick = () => {
        fetch('https://mobile-server.vercel.app/wish', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(mobilePost)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    // form.reset();
                    alert('Added wish list')
                }
                else {
                    alert('sorry');
                }
            })
    }
    return (
        <div>
            <div className='text-center'>
                <p className='text-xl md:text-3xl font-bold'>The Second Hand Mobile Screen</p>
                <p className='text-xl font-bold'>Total:{mobile.length}</p>
            </div>
            <div className='grid grid-cols-1  md:grid-cols-4'>
                {
                    mobile.slice(0, 8).map(d => <div key={d._id} className="hero mb-10">

                        <div className="hero-content flex-col  p-1  w-full rounded-lg">
                            <div>
                                <img alt='img' src={d.picture} className="rounded-lg shadow-xl w-24 h-32" />
                            </div>
                            <div>
                                <h1 className="md:text-xs text-xl font-bold">{d.name}</h1>
                                <div className='grid   grid-cols-1  w-full'>
                                    <p className="md:text-xs text-xl">Brand:{d.brand}</p>

                                    <p className="md:text-xs text-xl">Seller:{d.seller}</p>
                                    <p className="md:text-xs text-xl">Ram:{d.ram}</p>
                                    <p className="md:text-xs text-xl">Camera:{d.camera}</p>
                                    <p className="md:text-xs text-xl">Battery:{d.battery}</p>
                                    <p className="md:text-xs text-xl">useTime:{d.useTime}</p>
                                    <p className="md:text-xs text-xl">location:{d.location}</p>
                                    <p className="md:text-xs text-xl">price:{d.price}</p>
                                    <p className="md:text-xs text-xl">resalePrice:{d.resalePrice}</p>
                                    <Link to={`/userdashbord/payment/${d._id}`}> <button className="badge badge-primary btn-outline btn-xs text-xs ">Buy Now</button></Link>
                                    <Link> <button onClick={() => handleClick(setD(d = { d }))} className="badge badge-primary btn-outline btn-xs text-xs">Add Wish List</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <Link to='/userdashboard/buyerProduct'><button className='btn btn-link'>See more..</button></Link>
        </div >
    );
};


export default BuyProductScreen;