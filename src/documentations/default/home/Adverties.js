import React, { useState } from 'react';
import { A5, A9, F7, vivo } from '../../../components/Image';

const Advertise = () => {
    let [imag, setImag] = useState(0)
    let img = [A5, A9, F7, vivo]

    const slide = () => {
        setInterval(() => {
            if (imag === img.length - 1) {
                setImag(imag = 0)
            }
            setImag(imag + 1);
        }, 50000)
    }
    slide();


    return (
        <div className='flex flex-col justify-center items-center w-screen mx-auto'>
            <div className='card justify-center items-center'>  
                    <img src={img[imag]} alt="Product" className='h-32 w-screen bg-base-300 p-2'/>
            </div >
        </div>
    );
}

export default Advertise;
