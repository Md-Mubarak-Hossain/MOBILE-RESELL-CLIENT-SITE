import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BrandBanner = () => {
    const [mobile,setMobile]=useState(0)
    let [imag, setImag] = useState(0)
    useEffect(() => {
        fetch('https://mobile-server.vercel.app/mobile')
            .then(res => res.json())
            .then(data => setMobile(data))
    }, [])
    const slide = () => {
        setInterval(() => {
            if (imag === mobile.length - 1) {
                setImag(imag = 0)
            }
            setImag(imag + 1);
        }, 80000)
    }
    slide();
    return (
        <div>
          <div className="flex justify-center bg-black p-8 ">
                                                <div className="flex flex-col justify-center">
                                        
                                                    <div className="flex flex-col lg:flex-row max-w-7xl justify-center items-center p-2 space-y-3 w-full">
                                                        <div className="flex flex-col  text-white md:items-start items-center justify-between  space-y-3 px-8">
                                                            <div className="text-5xl md:text-7xl font-bold ">
                                                                Super {mobile[imag]?.brand} </div>
                                                            <div className="text-lg uppercase md:text-3xl   ">
                                                                Resell Products</div>
                                                            <div className="text-xl md:text-3xl">
                                                            {mobile[imag]?.name}
                                                                </div>
                                                        </div>
                                                        <div className="flex space-x-2 md:space-x-6 md:m-4">
                                        
                                                            <div className="md:w-20 w-10 h-60 md:h-96  overflow-hidden rounded-xl">
                                                                <img src={mobile[imag]?.picture} className="h-full w-full" alt="brand"/>
                                                            </div>
                                                            <div className="md:w-60 w-28 h-60 md:h-96  overflow-hidden rounded-xl">
                                                                <img src={mobile[imag]?.picture} className="h-full w-full" alt=""/>
                                        
                                                            </div>
                                                            <div className="md:w-28  w-16 h-60 md:h-96  overflow-hidden rounded-xl">
                                                                <img src={mobile[imag]?.picture} className="h-full w-full" alt="brand"/>
                                        
                                                            </div>
                                                            <div className="md:w-20 w-10 h-60 md:h-96  overflow-hidden rounded-xl">
                                                                <img src={mobile[imag]?.picture} className="h-full w-full" alt="brand"/>
                                        
                                                            </div>
                                                        </div>
                                        
                                                    </div>
                                                </div>
                                            </div>
                                        
        </div>
    );
};

export default BrandBanner;