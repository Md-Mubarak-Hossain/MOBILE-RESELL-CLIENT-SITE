import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../components/Hooks/useTitle';

const A5 = () => {
    useTitle('Oppo A5');
    const [mobile, setMobile] = useState([]);
    const [MobileData, setD] = useState([]);
    const name = MobileData.d?.name
    const brand = MobileData.d?.brand
    const ram = MobileData.d?.ram
    const picture = MobileData.d?.picture
    const camera = MobileData.d?.camera
    const price = MobileData.d?.price
    const resalePrice = MobileData.d?.resalePrice
    const battery = MobileData.d?.battery
    const useTime = MobileData.d?.useTime
    const location = MobileData.d?.location
    const seller = MobileData.d?.seller
    console.log(name)
    useEffect(() => {
        fetch('https://mobile-server.vercel.app/mobile')
            .then(res => res.json())
            .then(data => setMobile(data))
    }, [])

    // data post
    const mobilePost = {
        name, brand,
        ram,
        picture,
        camera,
        price,
        resalePrice,
        battery,
        useTime,
        location,
        seller
    }
    console.log(mobilePost)
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
                    alert('Added in wish list')
                }
                else {
                    alert('sorry');
                }
            })
    }
    return (
        <div data-theme='light' className='w-full'>
            <div className='text-center md:mb-5'>
                <p className='text-xs md:text-3xl font-bold'>The Second Hand Mobile Screen</p>
                <p className='text-xs md:text-2xl font-bold'>Brand: Oppo</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-5'>
                {
                    mobile.map(d => <div key={d._id} className="hero">
                        {
                            d.category?.includes("A5") ?
                                <div className="card place-items-center p-2 w-full rounded-lg">
                                    <div>
                                        <img alt='img' src={d.picture} className=" rounded-lg shadow-xl w-32 h-40" />
                                    </div>
                                    <div>
                                        <h1 className="md:text-xs font-bold">{d.name}</h1>
                                        <div className='grid gap-2 md:gap-0 grid-cols-2 md:grid-cols-1 w-full'>
                                            <p className="md:text-xs">Brand:{d.brand}</p>
                                            <p className="md:text-xs">Category:{d.category}</p>
                                            <p className="md:text-xs">Seller:{d.seller}</p>
                                            <p className="md:text-xs">Ram:{d.ram}</p>
                                            <p className="md:text-xs">Camera:{d.camera}</p>
                                            <p className="md:text-xs">Battery:{d.battery}</p>
                                            <p className="md:text-xs">useTime:{d.useTime}</p>
                                            <p className="md:text-xs">price:{d.price}</p>
                                            <p className="md:text-xs">resalePrice:{d.resalePrice}</p>
                                            <p className="md:text-xs">location:{d.location}</p>
                                        </div>
                                        <Link to={`/userdashboard/payment2/${d._id}`}> <button className="badge badge-outline btn-outline btn-secondary btn-xs text-xs">Buy Now</button></Link>
                                        <Link> <button onClick={() => handleClick(setD(d = { d }))} className="badge badge-outline btn-outline btn-secondary btn-xs text-xs">Add Wish List</button></Link>
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
export default A5;