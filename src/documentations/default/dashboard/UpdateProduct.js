import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../../components/Hooks/useTitle';
import { update } from '../../../components/Image';

const UpdateProduct = () => {
    useTitle('Seller Update Page');
    // default view by id
    const Data = useLoaderData();
    console.log(Data)
    const { name, brand, ram, camera, useTime, resalePrice, category } = Data;

    // load all data
    const [previousData, setUpdateData] = useState([])
    const [updateData, setData] = useState(previousData)
    useEffect(() => {
        fetch('https://mobile-server.vercel.app/mobile')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setUpdateData(data)
            })
    }, [])
    const handleSub = event => {
        event.preventDefault();
        fetch(`https://mobile-server.vercel.app/mobile/${Data._id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updateData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    alert('successfully update')
                    event.target.reset();
                }
            })
    }
    const onChangeHandle = event => {
        const value = event.target.value;
        const field = event.target.name;
        const totalData = { ...updateData };
        totalData[field] = value;
        setData(totalData);
    }
    return (
        <div>
            <form onSubmit={handleSub} className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Update now!</h1>
                        <div className='py-6'>
                            <img src={update} alt="img" />
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">name</span>
                                </label>
                                <input onChange={onChangeHandle} defaultValue={name} placeholder='enter name' name='name' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Brand</span>
                                </label>
                                <input type="text" onChange={onChangeHandle} defaultValue={brand} placeholder='enter name' name='brand' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Category</span>
                                </label>
                                <input type="text" onChange={onChangeHandle} defaultValue={category} placeholder='enter name' name='category' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Ram</span>
                                </label>
                                <input type="text" onChange={onChangeHandle} defaultValue={ram} placeholder='enter name' name='ram' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Camera</span>
                                </label>
                                <input type="text" onChange={onChangeHandle} defaultValue={camera} placeholder='enter name' name='camera' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Re-sale Price</span>
                                </label>
                                <input type="text" onChange={onChangeHandle} defaultValue={resalePrice} placeholder='enter name' name='resalePrice' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">useTime</span>
                                </label>
                                <input type="text" onChange={onChangeHandle} defaultValue={useTime} placeholder='enter name' name='useTime' className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-outline btn-primary">Update</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <div>
                <Link to='/sellerdashboard/seeAllProducts'><button className='btn btn-link btn-warning'>Return Products Screen</button></Link>
            </div>
        </div >
    );
};

export default UpdateProduct;