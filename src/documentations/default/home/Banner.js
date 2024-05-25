import React, { useEffect, useState } from 'react';
const Banner = () => {
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
    // {name,brand,ram,picture}=mobile;
    return (
        <div>
                <div className="flex justify-center ">
                                           
                                        </div>
                                        <div className="flex justify-center  ">
                                            <div className="flex flex-col items-center justify-center">
                                    
                                                <div className="flex flex-col  max-w-7xl justify-center items-center space-y-3 w-full ">
                                                    <div className="flex flex-col   md:items-start items-center justify-center  space-y-3 px-8 text-center ">
                                                        <div className="text-3xl md:text-7xl font-bold ">
                                                            Buy Your Fashion See You More Charming</div>
                                                    </div>
                                                    <div
                                                        className="flex md:flex-row space-x-2 space-y-3 md:space-x-6   w-full items-center justify-center ">
                                    
                                                        <div className="md:w-40 w-64 h-40  overflow-hidden rounded-xl ">
                                                            <img src={mobile[imag]?.picture}
                                    
                                                            alt={mobile[imag]?.brand} className="" />
                                                        </div>
                                                        <div className="flex flex-row md:flex-col space-x-3 space-y-6 items-center justify-center">
                                                            <div className="w-32 md:w-40 h-32  overflow-hidden rounded-xl ">
                                                                <img src={mobile[imag]?.picture}
                                    
                                                                alt={mobile[imag]?.brand} className="" />
                                                            </div>
                                                            <div className="w-32 md:w-40 h-48  overflow-hidden rounded-xl ">
                                                                <img src={mobile[imag]?.picture}
                                    
                                                                alt={mobile[imag]?.brand} className="" />
                                                            </div>
                                                        </div>
                                                        <div className="md:w-60 w-64 h-96  overflow-hidden rounded-xl ">
                                                            <img src={mobile[imag]?.picture}
                                    
                                                            alt={mobile[imag]?.brand} className="" />
                                                        </div>
                                                        <div className="flex flex-row md:flex-col space-x-3 space-y-6 items-center justify-center ">
                                                            <div className="w-32 md:w-40 h-48  overflow-hidden rounded-xl ">
                                                                <img src={mobile[imag]?.picture}
                                    
                                                                alt={mobile[imag]?.brand} className="" />
                                                            </div>
                                                            <div className="w-32 md:w-40 h-32  overflow-hidden rounded-xl ">
                                                                <img src={mobile[imag]?.picture}
                                    
                                                                alt={mobile[imag]?.brand} className="" />
                                                            </div>
                                                        </div>
                                                        <div className="md:w-40 w-64 h-40  overflow-hidden rounded-xl ">
                                                            <img src={mobile[imag]?.picture}
                                    
                                                            alt={mobile[imag]?.brand} className="" />
                                                        </div>
                                    
                                    
                                                    </div>
                                    
                                                </div>
                                            </div>
                                        </div> 
                                      
        </div>
    );
};

export default Banner;