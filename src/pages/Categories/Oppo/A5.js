import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const A5 = () => {
    const [mobile, setMobile] = useState([]);

    // const { data: Data, isLoading } = useQuery(
    //     {
    //         queryKey: ['Data'],
    //         queryFn: () => fetch('http://localhost:5000/mobile')
    //             .then(res => res.json())
    //     }
    // )
    useEffect(() => {
        fetch('http://localhost:5000/mobile')
            .then(res => res.json())
            .then(data => setMobile(data))
    }, [])
    console.log(mobile);
    return (
        <div className='lg:m-16'>
            <div className='text-center lg:mb-5'>
                <p className='text-xl lg:text-4xl font-bold'>The Second Hand Mobile Screen</p>
                <p class='text-xl lg:text-4xl font-bold text-warning'>Category: Oppo A5</p>
            </div>
            <div className='grid grid-cols-1 lg:gap-2 lg:grid-cols-2'>
                {
                    mobile.map(d => <div key={d._id} className="hero">
                        {
                            d.category.includes("A5") ?
                                <div className="hero-content flex-col lg:flex-row p-2 lg:border w-full rounded-lg">
                                    <div>
                                        <img alt='img' src={d.picture} className=" rounded-lg shadow-xl h-72" />
                                    </div>
                                    <div>
                                        <h1 className="lg:text-xl font-bold">{d.name}</h1>
                                        <div className='grid gap-2 lg:gap-0 grid-cols-2 lg:grid-cols-1 w-full'>
                                            <p className="lg:text-xl">Brand:{d.brand}</p>
                                            <p className="lg:text-xl">Category:{d.category}</p>
                                            <p className="lg:text-xl">Seller:{d.seller}</p>
                                            <p className="lg:text-xl">Ram:{d.ram}</p>
                                            <p className="lg:text-xl">Camera:{d.camera}</p>
                                            <p className="lg:text-xl">Battery:{d.battery}</p>
                                            <p className="lg:text-xl">useTime:{d.useTime}</p>
                                            <p className="lg:text-xl">price:{d.price}</p>
                                            <p className="lg:text-xl">resalePrice:{d.resalePrice}</p>
                                            <p className="lg:text-xl">location:{d.location}</p>
                                        </div>
                                        <Link to={`/delete/${d._id}`}><button className="btn btn-primary btn-sm">X</button></Link>
                                        <Link to={`/update/${d._id}`}> <button className="btn btn-primary btn-sm">update</button></Link>
                                    </div>
                                </div>
                                : <>
                                </>
                        }
                    </div>)
                }
            </div>
        </div >
    );
};

export default A5;