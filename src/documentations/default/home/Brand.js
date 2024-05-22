import React from 'react';
import{infinix ,vivo ,oppoWebp} from '../../../components/Image';
import { Link } from 'react-router-dom';
import useTitle from '../../../components/Hooks/useTitle';
const Brand = () => {
    useTitle('brand');
    return (
        <div className='mx-auto w-full'>
            <div className='w-full text-center py-5'>
                <h2 className='text-xl'>Our Super Brand</h2>
                <h2 className='text-2xl font-bold'>Re-Sale Product</h2>
            </div>
            <div className="hero min-h-screen bg-base-300">
                <div className="hero-content flex-col md:flex-row">
                    <div>
                        <img alt='img' src={oppoWebp} className="rounded-lg shadow-2xl border-2 border-dotted h-screen" />
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
                        <Link to='/oppo' className="btn btn-warning btn-outline rounded-full">See more products
                        </Link>
                    </div>
                </div>
            </div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row-reverse">
                    <div>
                        <img alt='img' src={infinix} className="rounded-lg shadow-2xl border-2 border-dotted h-screen w-full md:h-screen" />
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
                        <Link to='/infinix' className="btn btn-warning btn-outline rounded-full">See more products
                        </Link>
                    </div>
                </div>
            </div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row">
                    <div>
                        <img alt='img' src={vivo} className="rounded-lg shadow-2xl border-2 border-dotted h-screen w-full md:h-screen" />
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
                        <Link to='/vivo' className="btn btn-warning btn-outline rounded-full">See more products
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Brand;