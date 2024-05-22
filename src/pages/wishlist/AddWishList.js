
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const AddWishList = () => {
    const [mobile, setMobile] = useState([]);
    useEffect(() => {
        fetch('https://mobile-server.vercel.app/wish')
            .then(res => res.json())
            .then(data => setMobile(data))
    }, [])
    console.log(mobile);
    const handleReset = (event) => {
        event.preventDefault();
    }
    const handleDelete = id => {
        const procced = window.confirm(`Are you sure to delete??`)
        if (procced) {
            fetch(`https://mobile-server.vercel.app/wish/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        const remainMobile = mobile.filter(d => d?._id !== id)
                        setMobile(remainMobile);
                        mobile();
                        handleReset();
                        alert('successfully deleted')
                    }

                })
        }
    }
    return (
        <form className="overflow-x-auto w-full bg-base-100 h-screen" >
            <div className='text-center mt-2 mb-5 right-0 w-full '>
                <h2 className='text-xs text-yellow-600 w-fit mr-auto'>selected number of mobile: <span className='border m-1 px-1'>{mobile?.length}</span></h2>
            </div>
            <table className="rounded-none w-full opacity-100">
                <tbody className='text-xs'>
                    <tr className='border-2 border-dotted border-blue-600'>
                        <th>Remove</th>
                        <th>Brand</th>
                        <th>Category</th>
                        <th>Resell-price</th>
                        <th>Payment</th>
                    </tr>
                    {
                        mobile?.map(d => <tr key={d?._id} className='border-2 border-dotted border-red-600'>

                            <th>
                                <Link onClick={() => handleDelete(d?._id)} className="btn btn-outline btn-primary btn-xs rounded-full">X</Link>
                            </th>
                            <td>
                                <div className="flex items-center">
                                    <div className="avatar">
                                        <div className="mask w-16 h-16">
                                            <img src={d?.picture} alt='img' className="w-14 h-14" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{d?.name}</div>
                                        <div className="opacity-50">{d?.category}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {d?.name}
                                <br />
                                <span className="badge badge-ghost badge-sm">{d?.brand}</span>
                            </td>
                            <td>$ {d?.resalePrice}</td>
                            <th>
                                <Link to={`/userdashboard/payment/${d?._id}`} className="btn btn-outline btn-primary btn-xs rounded-full text-xs">{d?.paid || "Go pay"}</Link>
                            </th>
                        </tr>)}
                </tbody>
            </table>
        </form >
    );
};

export default AddWishList;