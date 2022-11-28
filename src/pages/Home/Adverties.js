import React, { useEffect, useState } from 'react';
import config from '../../config';
import {
    AdvertisingProvider, AdvertisingSlot, logVersionInfo
} from 'react-advertising';
import { IoMdNotificationsOutline } from 'react-icons/io'
import vivo from '../Home/Offer/vivo.jpg';
import oppo from '../Home/Offer/oppo.jpg';
import infinix from '../Home/Offer/infinix.jpg';

const Advertise = () => {
    let [imag, setImag] = useState(0)
    let img = [oppo, infinix, vivo]
    useEffect(() => {
        setInterval(() => {
            setImag(imag++);
            if (imag === img.length) {
                setImag(0)
            }
        }, 20000)
    }, [])

    const [mobile, setMobile] = useState([]);
    useEffect(() => {
        fetch('https://mobile-server.vercel.app/mobile')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMobile(data)
            })
    }, [])

    console.log(imag)
    console.log(mobile)
    logVersionInfo();
    return (
        <div className='flex flex-col justify-center items-center place-items-start mb-0 pb-0'>
            {
                mobile.length > 0 ?
                    <div className='card justify-center items-center place-items-center relative'>
                        <AdvertisingProvider config={config} >
                            <img src={img[imag]} alt="logo" />
                            <div>
                                <h2 className='absolute top-0 '>
                                    <p className='text-5xl font-bold text-warning'>
                                        <IoMdNotificationsOutline></IoMdNotificationsOutline>
                                    </p>
                                    Ads <em>10% discount on bkash payment </em>:</h2>
                                <AdvertisingSlot id="banner-ad" />
                            </div>
                        </AdvertisingProvider>
                    </div >
                    : <div className='hidden'>
                    </div>}
        </div >
    );
}

export default Advertise;
