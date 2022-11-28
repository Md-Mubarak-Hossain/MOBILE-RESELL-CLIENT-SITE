import React from 'react';
import onlinePayment from '../UserDashboard/PaymentLogo/onlinePayment.png';
import onlineShop from '../UserDashboard/PaymentLogo/onlineShop.png';
import onlineResell from '../UserDashboard/PaymentLogo/onlineResell.png';
import freeShipping from '../UserDashboard/PaymentLogo/freeShipping.png';
import freeRepair from '../UserDashboard/PaymentLogo/repairService.png';
import exchangeOffer from '../UserDashboard/PaymentLogo/exchangeOffer.webp';
import { BiPhoneCall } from 'react-icons/bi';


const Services = () => {

    return (
        <div className='card shadow-2xl lg:m-16  place-items-center'>
            <h2 className='text-xl font-bold'>Services</h2>
            <h2 className='text-4xl font-bold'>Our Best Services</h2>
            <div className='p-5 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-3'>
                <div className='lg:border border-fuchsia-700 card px-3 pt-3'>
                    <div className='w-full text-center'>
                        <h2 className='text-3xl font-bold text-warning'>Online Payment</h2>
                    </div>
                    <div className='flex flex-col justify-center items-center place-items-center'>
                        <label htmlFor="onlinePayment" className="bg-transparent my-5 place-items-center">
                            <img src={onlinePayment} alt="img" className='bg-white h-32 w-72' />
                            <label htmlFor="onlinePayment" className='btn btn-link btn-active'>See more ...</label>
                        </label>
                        <input type="checkbox" id="onlinePayment" className="modal-toggle" />
                        <div className="modal  sm:modal-middle h-screen right-10  ">
                            <div className="w-80  bg-pink-600 pb-5">
                                <h3 className="font-bold text-lg py-2 ">
                                    <img src={onlinePayment} alt=" img" className='bg-white w-full h-24' />
                                </h3>
                                <div className='p-5'>
                                    <div className='card text-white shadow-pink-900 shadow-2xl p-2 text-center'>
                                        <h2>Merchant:{Math.floor(Math.random() * 100)}{(Math.random() + 1).toString(36).substring(7)}</h2>
                                        <h2>Invoice no:{Math.random()}</h2>
                                        <h2>Amount: $</h2>
                                    </div>
                                </div>
                                <div className='card text-white text-center w-full'>
                                    <h2 className='pb-4'>Your bkash account number</h2>
                                    <p className='text-black-600'>
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
                                    <label className="w-24 mx-1 px-5 text-xs shadow-xl py-2 text-white bg-pink-900 rounded-0"
                                    >procced</label>
                                    <label htmlFor="onlinePayment" className="w-24 mx-1 px-5 text-xs shadow-xl py-2 text-white bg-pink-900 rounded-0">close</label>
                                </div>
                                <div className='w-full py-5'>
                                    <h2 className='flex justify-center items-center place-items-center'><p><BiPhoneCall></BiPhoneCall></p><p>16247</p></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* .....online shope..... */}
                <div className='lg:border border-fuchsia-700 card py-3'>
                    <div className='w-full text-center'>
                        <h2 className='text-3xl font-bold text-warning'>Online Shop</h2>
                    </div>
                    <div className='flex flex-col justify-center items-center place-items-center'>
                        <label htmlFor="onlineShop" className="bg-transparent my-5">
                            <img src={onlineShop} alt="img" className='bg-white h-32 w-72' />
                            <label htmlFor="onlineShop" className='btn btn-link btn-active'>See more ...</label>
                        </label>
                        <input type="checkbox" id="onlineShop" className="modal-toggle" />
                        <div className="modal  sm:modal-middle h-screen right-10  ">
                            <div className="w-80  bg-pink-600 pb-5">
                                <h3 className="font-bold text-lg py-2 ">
                                    <img src={onlineShop} alt=" img" className='bg-white w-full h-24' />
                                </h3>
                                <div className='p-5'>
                                    <div className='card text-white shadow-pink-900 shadow-2xl p-2 text-center'>
                                        <h2>Merchant:{Math.floor(Math.random() * 100)}{(Math.random() + 1).toString(36).substring(7)}</h2>
                                        <h2>Invoice no:{Math.random()}</h2>
                                        <h2>Amount: $</h2>
                                    </div>
                                </div>
                                <div className='card text-white text-center w-full'>
                                    <h2 className='pb-4'>Your bkash account number</h2>
                                    <p className='text-black-600'>
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
                                    <label className="w-24 mx-1 px-5 text-xs shadow-xl py-2 text-white bg-pink-900 rounded-0"
                                    >procced</label>
                                    <label htmlFor="onlineShop" className="w-24 mx-1 px-5 text-xs shadow-xl py-2 text-white bg-pink-900 rounded-0">close</label>
                                </div>
                                <div className='w-full py-5'>
                                    <h2 className='flex justify-center items-center place-items-center'><p><BiPhoneCall></BiPhoneCall></p><p>16247</p></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ....online resale.... */}
                <div className='lg:border border-fuchsia-700 card py-3'>
                    <div className='w-full text-center'>
                        <h2 className='text-3xl font-bold text-warning'>Online Resale</h2>
                    </div>
                    <div className='flex flex-col justify-center items-center place-items-center'>
                        <label htmlFor="onlineResell" className="bg-transparent my-5">
                            <img src={onlineResell} alt="img" className='bg-white h-32 w-72' />
                            <label htmlFor="onlineResell" className='btn btn-link btn-active'>See more ...</label>
                        </label>
                        <input type="checkbox" id="onlineResell" className="modal-toggle" />
                        <div className="modal  sm:modal-middle h-screen right-10  ">
                            <div className="w-80  bg-pink-600 pb-5">
                                <h3 className="font-bold text-lg py-2 ">
                                    <img src={onlineResell} alt=" img" className='bg-white w-full h-24' />
                                </h3>
                                <div className='p-5'>
                                    <div className='card text-white shadow-pink-900 shadow-2xl p-2 text-center'>
                                        <h2>Merchant:{Math.floor(Math.random() * 100)}{(Math.random() + 1).toString(36).substring(7)}</h2>
                                        <h2>Invoice no:{Math.random()}</h2>
                                        <h2>Amount: $</h2>
                                    </div>
                                </div>
                                <div className='card text-white text-center w-full'>
                                    <h2 className='pb-4'>Your bkash account number</h2>
                                    <p className='text-black-600'>
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
                                    <label className="w-24 mx-1 px-5 text-xs shadow-xl py-2 text-white bg-pink-900 rounded-0"
                                    >procced</label>
                                    <label htmlFor="onlineResell" className="w-24 mx-1 px-5 text-xs shadow-xl py-2 text-white bg-pink-900 rounded-0">close</label>
                                </div>
                                <div className='w-full py-5'>
                                    <h2 className='flex justify-center items-center place-items-center'><p><BiPhoneCall></BiPhoneCall></p><p>16247</p></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ....free shipping.... */}
                <div className='lg:border border-fuchsia-700 card py-3'>
                    <div className='w-full text-center'>
                        <h2 className='text-3xl font-bold text-warning'>Free Shipping</h2>
                    </div>
                    <div className='flex flex-col justify-center items-center place-items-center'>
                        <label htmlFor="freeShipping" className="bg-transparent my-5">
                            <img src={freeShipping} alt="img" className='bg-white h-32 w-72' />
                            <label htmlFor="freeShipping" className='btn btn-link btn-active'>See more ...</label>
                        </label>
                        <input type="checkbox" id="freeShipping" className="modal-toggle" />
                        <div className="modal  sm:modal-middle h-screen right-10  ">
                            <div className="w-80  bg-pink-600 pb-5">
                                <h3 className="font-bold text-lg py-2 ">
                                    <img src={freeShipping} alt=" img" className='bg-white w-full h-24' />
                                </h3>
                                <div className='p-5'>
                                    <div className='card text-white shadow-pink-900 shadow-2xl p-2 text-center'>
                                        <h2>Merchant:{Math.floor(Math.random() * 100)}{(Math.random() + 1).toString(36).substring(7)}</h2>
                                        <h2>Invoice no:{Math.random()}</h2>
                                        <h2>Amount: $</h2>
                                    </div>
                                </div>
                                <div className='card text-white text-center w-full'>
                                    <h2 className='pb-4'>Your bkash account number</h2>
                                    <p className='text-black-600'>
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
                                    <label className="w-24 mx-1 px-5 text-xs shadow-xl py-2 text-white bg-pink-900 rounded-0"
                                    >procced</label>
                                    <label htmlFor="freeShipping" className="w-24 mx-1 px-5 text-xs shadow-xl py-2 text-white bg-pink-900 rounded-0">close</label>
                                </div>
                                <div className='w-full py-5'>
                                    <h2 className='flex justify-center items-center place-items-center'><p><BiPhoneCall></BiPhoneCall></p><p>16247</p></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ...exchange.... */}
                <div className='lg:border border-fuchsia-700 card py-3'>
                    <div className='w-full text-center'>
                        <h2 className='text-3xl font-bold text-warning'>Old To New</h2>
                    </div>
                    <div className='flex flex-col justify-center items-center place-items-center'>
                        <label htmlFor="exchangeOffer" className="bg-transparent my-5">
                            <img src={exchangeOffer} alt="img" className='bg-white h-32 w-72' />
                            <label htmlFor="exchangeOffer" className='btn btn-link btn-active'>See more ...</label>
                        </label>
                        <input type="checkbox" id="exchangeOffer" className="modal-toggle" />
                        <div className="modal  sm:modal-middle h-screen right-10  ">
                            <div className="w-80  bg-pink-600 pb-5">
                                <h3 className="font-bold text-lg py-2 ">
                                    <img src={exchangeOffer} alt=" img" className='bg-white w-full h-24' />
                                </h3>
                                <div className='p-5'>
                                    <div className='card text-white shadow-pink-900 shadow-2xl p-2 text-center'>
                                        <h2>Merchant:{Math.floor(Math.random() * 100)}{(Math.random() + 1).toString(36).substring(7)}</h2>
                                        <h2>Invoice no:{Math.random()}</h2>
                                        <h2>Amount: $</h2>
                                    </div>
                                </div>
                                <div className='card text-white text-center w-full'>
                                    <h2 className='pb-4'>Your bkash account number</h2>
                                    <p className='text-black-600'>
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
                                    <label className="w-24 mx-1 px-5 text-xs shadow-xl py-2 text-white bg-pink-900 rounded-0"
                                    >procced</label>
                                    <label htmlFor="exchangeOffer" className="w-24 mx-1 px-5 text-xs shadow-xl py-2 text-white bg-pink-900 rounded-0">close</label>
                                </div>
                                <div className='w-full py-5'>
                                    <h2 className='flex justify-center items-center place-items-center'><p><BiPhoneCall></BiPhoneCall></p><p>16247</p></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* .......free repair.... */}
                <div className='lg:border border-fuchsia-700 card py-3'>
                    <div className='w-full text-center'>
                        <h2 className='text-3xl font-bold text-warning'>Free Repair</h2>
                    </div>
                    <div className='flex flex-col justify-center items-center place-items-center'>
                        <label htmlFor="freeRepair" className="bg-transparent my-5">
                            <img src={freeRepair} alt="img" className='bg-white h-32 w-72' />
                            <label htmlFor="freeRepair" className='btn btn-link btn-active'>See more ...</label>
                        </label>
                        <input type="checkbox" id="freeRepair" className="modal-toggle" />
                        <div className="modal  sm:modal-middle h-screen right-10  ">
                            <div className="w-80  bg-pink-600 pb-5">
                                <h3 className="font-bold text-lg py-2 ">
                                    <img src={freeRepair} alt="img" className='bg-white w-full h-24' />
                                </h3>
                                <div className='p-5'>
                                    <div className='card text-white shadow-pink-900 shadow-2xl p-2 text-center'>
                                        <h2>Merchant:{Math.floor(Math.random() * 100)}{(Math.random() + 1).toString(36).substring(7)}</h2>
                                        <h2>Invoice no:{Math.random()}</h2>
                                        <h2>Amount: $</h2>
                                    </div>
                                </div>
                                <div className='card text-white text-center w-full'>
                                    <h2 className='pb-4'>Your bkash account number</h2>
                                    <p className='text-black-600'>
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
                                    <label className="w-24 mx-1 px-5 text-xs shadow-xl py-2 text-white bg-pink-900 rounded-0"
                                    >procced</label>
                                    <label htmlFor="freeRepair" className="w-24 mx-1 px-5 text-xs shadow-xl py-2 text-white bg-pink-900 rounded-0">close</label>
                                </div>
                                <div className='w-full py-5'>
                                    <h2 className='flex justify-center items-center place-items-center'><p><BiPhoneCall></BiPhoneCall></p><p>16247</p></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;