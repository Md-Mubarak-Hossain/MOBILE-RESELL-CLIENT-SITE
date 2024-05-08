import React, { useState } from 'react';
import config from '../../../config';
import {
    AdvertisingProvider, AdvertisingSlot, logVersionInfo
} from 'react-advertising';
import{infinix ,oppo ,vivo} from '../../../components/Image';
import { useQuery } from '@tanstack/react-query';
import Spin from '../../../pages/account/Spinner/Spin';

const Advertise = () => {
    let [imag, setImag] = useState(0)
    let img = [oppo, infinix, vivo]

    const slide = () => {
        setInterval(() => {
            if (imag === img.length) {
                setImag(imag = 0)
            }
            setImag(imag + 1);
        }, 48000)
    }
    slide();
    const { isLoading, data: mobile } = useQuery({
        queryKey: ['mobile'],
        queryFn: () =>
            fetch('https://mobile-server.vercel.app/mobile')
                .then(res => res.json())
    })
    if (isLoading) return <Spin></Spin >
    console.log(imag)
    console.log(mobile)
    logVersionInfo();
    return (
        <div className='flex flex-col justify-center items-center place-items-start mb-0 pb-0'>
            {
                mobile?.length > 0 ?
                    <div className='card justify-center items-center place-items-center relative'>
                        <AdvertisingProvider config={config} >
                            <p className='text-xl text-white'>
                                <img src={img[imag]} alt="The Product Is Comming Soon" />
                            </p>
                            <div>
                                <AdvertisingSlot id="banner-ad" />
                            </div>
                        </AdvertisingProvider>
                    </div >
                    : <div className='text-xl text-center text-orange-500'>
                        <h2>No Product available</h2>
                    </div>}
        </div >
    );
}

export default Advertise;
