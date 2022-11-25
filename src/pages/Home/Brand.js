import React from 'react';
import vivo from '../../assets/vivobanner.jpg';
import infinix from '../../assets/infinixhot9banner.jpg';
import oppo from '../../assets/oppo.webp';
import { Link } from 'react-router-dom';
const Brand = () => {
    return (
        <div className='m-6 lg:m-16 '>
            <div className='w-full text-center'>
                <h2 className='text-xl'>Super Brand</h2>
                <h2 className='text-3xl font-bold'>Our Re-Sale Product</h2>
            </div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div>
                        <img alt='img' src={oppo} className="rounded-lg shadow-2xl" />
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold">Oppo</h1>
                        <p className="py-6">
                            <ul>
                                <h2 className='text-3xl text-warning py-2'> OPPO Reno8 5G</h2>
                                <li> Dual Sim, 3G, 4G, 5G, VoLTE, Wi-Fi, NFC.</li>
                                <li> Dimensity 1300, Octa Core, 3 GHz Processor.</li>
                                <li>8 GB RAM, 128 GB inbuilt.</li>
                                <li>4500 mAh Battery with 80W Fast Charging.</li>
                                <li>6.43 inches, 1080 x 2400 px, 90 Hz Display with Punch Hole.</li>
                                <li>50 MP + 8 MP + 2 MP Triple Rear & 32 MP Front Camera.</li>
                                <li>Android v12.</li>
                                <li> No FM Radio.</li>
                            </ul>
                        </p>
                        <Link to='/oppo'>
                            <button className="btn btn-warning btn-outline">See more products</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div>
                        <img alt='img' src={infinix} className="rounded-lg shadow-2xl w-full h-72" />
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold">Infinix Hot12i</h1>
                        <p className="py-6">
                            <ul>
                                <h2 className='text-3xl text-warning py-2'> Infinix Hot12i 5G</h2>
                                <li> Dual Sim, 3G, 4G, 5G, VoLTE, Wi-Fi, NFC.</li>
                                <li> Dimensity 1300, Octa Core, 3 GHz Processor.</li>
                                <li>8 GB RAM, 128 GB inbuilt.</li>
                                <li>4500 mAh Battery with 80W Fast Charging.</li>
                                <li>6.43 inches, 1080 x 2400 px, 90 Hz Display with Punch Hole.</li>
                                <li>50 MP + 8 MP + 2 MP Triple Rear & 32 MP Front Camera.</li>
                                <li>Android v12.</li>
                                <li>FM Radio.</li>
                            </ul>
                        </p>
                        <Link to='/infinix'>
                            <button className="btn btn-warning btn-outline">See more products</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div>
                        <img alt='img' src={vivo} className="rounded-lg shadow-2xl w-full h-72" />
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold">Vivo</h1>
                        <p className="py-6">
                            <ul>
                                <h2 className='text-3xl text-warning py-2'> Vivo 5G</h2>
                                <li> Dual Sim, 3G, 4G, 5G, VoLTE, Wi-Fi, NFC.</li>
                                <li> Dimensity 1300, Octa Core, 3 GHz Processor.</li>
                                <li>8 GB RAM, 128 GB inbuilt.</li>
                                <li>4500 mAh Battery with 80W Fast Charging.</li>
                                <li>6.43 inches, 1080 x 2400 px, 90 Hz Display with Punch Hole.</li>
                                <li>50 MP + 8 MP + 2 MP Triple Rear & 32 MP Front Camera.</li>
                                <li>Android v12.</li>
                                <li>FM Radio.</li>
                            </ul>
                        </p>
                        <Link to='/vivo'>
                            <button className="btn btn-warning btn-outline">See more products</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Brand;