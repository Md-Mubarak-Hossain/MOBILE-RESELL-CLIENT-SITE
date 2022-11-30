import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../components/Hooks/useTitle';

const SeeAllProducts = () => {
    useTitle('All Products');
    const [mobile, setMobile] = useState([])
    useEffect(() => {
        fetch('https://mobile-server.vercel.app/mobile')
            .then(res => res.json())
            .then(data => setMobile(data))
    }, [])

    console.log(mobile);
    // .......

    const handleDelete = id => {
        const procced = window.confirm(`Are you sure to delete??`)
        if (procced) {
            fetch(`https://mobile-server.vercel.app/mobile/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        const remainMobile = mobile.filter(d => d._id !== id)
                        setMobile(remainMobile);
                        mobile();
                        alert('successfully deleted')
                    }

                })
        }
    }
    // .......
    return (
        <div data-theme='light' className='w-full'>
            <div className='text-center mb-5'>
                <p className='text-xl lg:text-2xl font-bold'>The Second Hand Mobile Screen</p>
                <h2>Total Mobiles:{mobile?.length}</h2>
            </div>
            <div className='grid grid-cols-1 lg:gap-2 lg:grid-cols-4'>
                {
                    mobile?.map(d => <div key={d._id} className="hero">
                        <div className="w-full flex flex-col place-items-center">
                            <div>
                                <img alt='img' src={d.picture} className=" rounded-lg shadow-xl lg:w-24 lg:h-32" />
                            </div>
                            <div>
                                <h1 className="text-xl lg:text-xs font-bold">{d.name}</h1>
                                <p className="text-xl lg:text-xs">Brand:{d.brand}</p>
                                <p className="text-xl lg:text-xs">Category:{d.category}</p>
                                <p className="text-xl lg:text-xs">Seller:{d.seller}</p>
                                <p className="text-xl lg:text-xs">Ram:{d.ram}</p>
                                <p className="text-xl lg:text-xs">Camera:{d.camera}</p>
                                <p className="text-xl lg:text-xs">Battery:{d.battery}</p>
                                <p className="text-xl lg:text-xs">useTime:{d.useTime}</p>
                                <p className="text-xl lg:text-xs">price:{d.price}</p>
                                <p className="text-xl lg:text-xs">resalePrice:{d.resalePrice}</p>
                                <p className="text-xl lg:text-xs">location:{d.location}</p>
                                <Link><button onClick={() => handleDelete(d._id)} className="btn btn-outline btn-primary btn-xs">X</button></Link>
                                <Link to={`/admindashboard/update/${d._id}`}> <button className="btn btn-outline btn-primary btn-xs">update</button></Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div >
    );
};


export default SeeAllProducts;