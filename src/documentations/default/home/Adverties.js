import React, { useState } from 'react';
import { A5, A9,vivo,vivobanner,oppoWebp } from '../../../components/Image';
const Advertise = () => {
    let [imag, setImag] = useState(0)
    let img = [oppoWebp,A5, A9, vivo,vivobanner]

    const slide = () => {
        setInterval(() => {
            if (imag === img.length - 1) {
                setImag(imag = 0)
            }
            setImag(imag + 1);
        }, 80000)
    }
    slide();


    return (
        <div className='flex flex-col justify-center items-center w-screen mx-auto'>
            <div className='flex justify-center items-center'>  
                    <img src={img[imag]} alt="Product" className='h-32 w-screen'/>
            </div >
        </div>
    );
}

export default Advertise;
