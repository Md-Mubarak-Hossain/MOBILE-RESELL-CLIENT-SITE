import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../../components/Hooks/useTitle';
import SeeAllProducts from './SeeAllProducts';

const DeleteProducts = () => {
    useTitle('Delete Product');
    // this use for view by id
    const Mobile = useLoaderData();
    // const { _id, name, version } = Mobile;
    const { _id, name, brand, ram, camera, useTime, resalePrice, category, price, picture, seller
    } = Mobile;
    const [previousMobile, setPreviouMobile] = useState([])
    const [restMobile, setMobile] = useState(previousMobile);

    // get all Mobile for update
    useEffect(() => {
        fetch('http://localhost:5000/mobile')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setPreviouMobile(data)
            })
    }, [])
    console.log(Mobile)
    const handleDelete = Mobile => {
        const procced = window.confirm(`Are you sure to delete??:${name}`)
        if (procced) {
            fetch(`http://localhost:5000/mobile/${_id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('successfully deleted')
                        const remainMobile = restMobile.filter(d => d._id !== Mobile._id)
                        setPreviouMobile(remainMobile);
                    }

                })
        }
    }

    return (
        <form>
            {
                Mobile._id ?
                    <div>
                        <div className="card  shadow-xl justify-center items-center my-5 pb-10">
                            <div className='grid grid-cols-2'>
                                <div className='h-96'>
                                    <figure className="px-10 pt-10">
                                        <img src={picture} alt="img" className="rounded-xl w-full h-72" />
                                    </figure>
                                </div>
                                <div className='h-96 pt-10'>
                                    <p className='text-xl font-semibold text-primary'>seller: {seller}</p>
                                    <div className='grid grid-cols-2 pt-4'>
                                        <h2 className="text-xl font-semibold">{name}</h2>
                                        <p className='text-xl font-semibold'>use:{useTime}</p>
                                        <p className='text-xl font-semibold'>brand:{brand}</p>
                                        <p className='text-xl font-semibold'>category:{category}</p>
                                        <p className='text-xl font-semibold'>camera:{camera}</p>
                                        <p className='text-xl font-semibold'>ram:{ram}</p>
                                        <p className='text-xl font-semibold text-secondary'>resale: ${resalePrice}</p>
                                        <p className='text-xl font-semibold'>price: ${price}</p>
                                    </div>
                                    <div className="card-actions pt-6">
                                        <button className='outline outline-offset-2 outline-red-700 hover:bg-red-700  w-80' onClick={() => handleDelete(Mobile)}>Delete</button>
                                    </div>
                                </div>
                                <div>Return <Link to='/seeAllProducts'><button className='btn btn-link'>View Products</button>
                                </Link></div>
                            </div>

                        </div>
                    </div>
                    : <>
                        <SeeAllProducts></SeeAllProducts>
                    </>
            }
        </form >
    );
};

export default DeleteProducts;