import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../components/Hooks/useTitle';
import { A9 } from '../../components/Image';

const BuyProduct = () => {
    useTitle('Buy Product');
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
        <>
            {
                mobile.length > 0 ? <div className='w-10/12 mx-auto'>
                    <div className='text-center md:mb-5'>
                        <p className='text-xl md:text-3xl font-bold'>The Second Hand Mobile Screen</p>
                        <p className='text-xl font-bold'>Total:{mobile?.length}</p>
                    </div>
                    <div className='grid grid-cols-1 gap-2 md:grid-cols-3'>
                        {
                            mobile?.map(d => <div key={d?._id} className="p-4 border-2 border-dotted">

                                <div className="hero-content flex p-1 w-full rounded-lg">
                                    <div>
                                        <img alt={d?.name} src={d?.picture} className="rounded-lg shadow-xl w-32 h-48" />
                                    </div>
                                    <div>
                                        <h1 className="text-xs  font-bold">{d?.name}</h1>
                                        <div className='grid grid-cols-1  w-full'>
                                            <p className="text-xs ">Brand:{d?.brand}</p>
                                            <p className="md:text-xs text-xl">Seller:{d?.seller}</p>
                                            <p className="md:text-xs text-xl">Ram:{d?.ram}</p>
                                            <p className="md:text-xs text-xl">Camera:{d?.camera}</p>
                                            <p className="md:text-xs text-xl">Battery:{d?.battery}</p>
                                            <p className="md:text-xs text-xl">useTime:{d?.useTime}</p>
                                            <p className="md:text-xs text-xl">location:{d?.location}</p>
                                            <p className="md:text-xs text-xl">price:{d?.price}</p>
                                            <p className="md:text-xs text-xl">resalePrice:{d?.resalePrice}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-between p-2'>
                                    <Link to={`/payment/${d?._id}`} className="badge badge-primary btn-outline btn-xs text-xs rounded-full px-2"> Buy Now</Link>
                                     <Link onClick={() => handleClick(setD(d = { d }))} className="btn badge badge-primary btn-outline btn-xs text-xs rounded-full px-2">Add Wish List</Link>
                                </div>
                            </div>)
                        }
                    </div>
                </div> : <div className='h-screen w-screen flex justify-center items-center'>There is no mobile available now</div>
            }
        </>
    );
};


export default BuyProduct;