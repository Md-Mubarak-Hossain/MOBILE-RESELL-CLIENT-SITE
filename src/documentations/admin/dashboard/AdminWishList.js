
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const AdminWishList = () => {
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
                        const remainMobile = mobile.filter(d => d._id !== id)
                        setMobile(remainMobile);
                        mobile();
                        handleReset();
                        alert('successfully deleted')
                    }

                })
        }
    }
    return (
        <form data-theme='light' className="overflow-x-auto w-full" >
            <div className='text-center mb-5'>
                <p className='text-xl md:text-4xl font-bold'>WishList</p>
                <h2>Total Mobiles:{mobile?.length}</h2>
            </div>
            <table className="table md:w-full">
                <thead>
                    <tr className='border bg-orange-500'>
                        <th>Remove</th>
                        <th>Brand</th>
                        <th>Category</th>
                        <th>resell-price</th>
                        <th>Payment</th>
                    </tr>
                </thead>
                {
                    mobile?.map(d => <tbody key={d._id}>
                        <tr className='border'>
                            <th>
                                <Link ><button onClick={() => handleDelete(d._id)} className="btn btn-outline btn-primary btn-sm">X</button></Link>
                            </th>
                            <td>
                                <div className="flex items-center space-x-2">
                                    <div className="avatar">
                                        <div className="mask w-20 h-20">
                                            <img src={d.picture} alt='img' />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{d.name}</div>
                                        <div className="text-sm opacity-50">{d.category}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {d.name}
                                <br />
                                <span className="badge badge-ghost badge-sm">{d.brand}</span>
                            </td>
                            <td>$ {d.resalePrice}</td>
                            <th>
                                <Link to={`/userdashboard/payment/${d._id}`}> <button className="btn btn-outline btn-primary btn-sm">{d?.paid || "Payment"}</button></Link>
                            </th>
                        </tr>

                    </tbody>)}
                <tfoot>
                    <tr>
                    </tr>
                </tfoot>
            </table>
        </form >
    );
};

export default AdminWishList;