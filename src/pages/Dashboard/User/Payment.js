import React from 'react';
import bkash from '../../../pages/Dashboard/User/PaymentLogo/bkash.png';
import rocket from '../../../pages/Dashboard/User/PaymentLogo/rocket.png';

import { BiPhoneCall } from 'react-icons/bi';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const product = useLoaderData();
    const { name, brand, resalePrice, picture } = product;
    return (
        <div className='p-5 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-2'>
            <div className='card shadow-2xl bg-fuchsia-500 lg:border'>
                <img src={picture} alt="img" />
                <h2>{name}</h2>
                <h2>{brand}</h2>
                <h2>{resalePrice}</h2>
            </div>
            <div>
                <div className='w-full text-center'>
                    <h2 className='text-3xl font-bold text-warning'>Select Payment Method</h2>
                </div>
                <div className='flex flex-col justify-center items-center place-items-center'>
                    {/* bkash account */}
                    <label htmlFor="bkashPay" className="bg-transparent my-5">
                        <img src={bkash} alt="img" className='bg-white h-32 w-72' />
                    </label>
                    <input type="checkbox" id="bkashPay" className="modal-toggle" />
                    <div className="modal  sm:modal-middle h-screen right-10  ">
                        <div className="w-80  bg-pink-600 pb-5">
                            <h3 className="font-bold text-lg py-2 ">
                                <img src={bkash} alt=" img" className='bg-white w-full h-24' />
                            </h3>
                            <div className='p-5'>
                                <div className='card text-white shadow-pink-900 shadow-2xl p-2 text-center'>
                                    <h2>Merchant:</h2>
                                    <h2>Invoice no:</h2>
                                    <h2>Amount:</h2>
                                </div>
                            </div>
                            <div className='card text-white text-center w-full'>
                                <h2 className='pb-4'>Your bkash account number</h2>
                                <p>
                                    <input type="text" placeholder="e.g 01xxxxxxxxx" className="w-48 h-8  bg-white rounded pl-2" />
                                </p>
                            </div>
                            <div className='px-2'>
                                <div className="flex justify-center place-items-center">
                                    <label className="label cursor-pointer ">
                                        <input type="checkbox" required className=" checkbox-white bg-white checkbox-xs" />
                                    </label>
                                    <p className="text-white text-xs">I agree to the<span className="btn btn-link lowercase text-xs text-white">terms & conditions!!!</span></p>
                                </div>
                            </div>
                            <div className="flex justify-center items-center place-items-center text-center">
                                <label className="w-24 mx-1 px-5 text-xs shadow-xl py-2 text-white bg-pink-900 rounded-0">procced</label>
                                <label htmlFor="bkashPay" className="w-24 mx-1 px-5 text-xs shadow-xl py-2 text-white bg-pink-900 rounded-0">close</label>
                            </div>
                            <div className='w-full py-5'>
                                <h2 className='flex justify-center items-center place-items-center'><p><BiPhoneCall></BiPhoneCall></p><p>16247</p></h2>
                            </div>
                        </div>
                    </div>
                    {/* rocket account */}
                    <label htmlFor="rocketPay" className="bg-transparent">
                        <img src={rocket} alt="img" className='bg-white h-32 w-72' />
                    </label>
                    <input type="checkbox" id="rocketPay" className="modal-toggle" />
                    <div className="modal  sm:modal-middle h-screen right-10  ">
                        <div className="w-80  bg-fuchsia-600 pb-5">
                            <h3 className="font-bold text-lg py-2 ">
                                <img src={rocket} alt=" img" className='bg-white w-full h-24' />
                            </h3>
                            <div className='p-5'>
                                <div className='card text-white shadow-fuchsia-900 shadow-2xl p-2 text-center'>
                                    <h2>Merchant:</h2>
                                    <h2>Invoice no:</h2>
                                    <h2>Amount:</h2>
                                </div>
                            </div>
                            <div className='card text-white text-center w-full'>
                                <h2 className='pb-4'>Your rocket account number</h2>
                                <p>
                                    <input type="text" placeholder="e.g 01xxxxxxxxx" className="w-48 h-8  bg-white rounded pl-2" />
                                </p>
                            </div>
                            <div className='px-2'>
                                <div className="flex justify-center place-items-center">
                                    <label className="label cursor-pointer ">
                                        <input type="checkbox" required className=" checkbox-white bg-white checkbox-xs" />
                                    </label>
                                    <p className="text-white text-xs">I agree to the<span className="btn btn-link lowercase text-xs text-white">terms & conditions!!!</span></p>
                                </div>
                            </div>
                            <div className="flex justify-center items-center place-items-center text-center">
                                <label className="w-24 mx-1 px-5 text-xs shadow-xl py-2 text-white bg-fuchsia-900 rounded-0">procced</label>
                                <label htmlFor="rocketPay" className="w-24 mx-1 px-5 text-xs shadow-xl py-2 text-white bg-fuchsia-900 rounded-0">close</label>
                            </div>
                            <div className='w-full py-5'>
                                <h2 className='flex justify-center items-center place-items-center'><p><BiPhoneCall></BiPhoneCall></p><p>16247</p></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;