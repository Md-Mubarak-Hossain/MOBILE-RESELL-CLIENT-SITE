import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Seller = () => {
    const [seller, setSeller] = useState([]);
    useEffect(() => {
        fetch('https://mobile-server.vercel.app/seller')
            .then(res => res.json())
            .then(data => setSeller(data))
    }, [])
    console.log(seller);
    const handleDelete = id => {
        const procced = window.confirm(`Are you sure to delete??`)
        if (procced) {
            fetch(`https://mobile-server.vercel.app/seller/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('successfully deleted')
                        const remainUser = seller.filter(d => d._id !== id)
                        setSeller(remainUser);
                        seller();
                    }

                })
        }
    }
    console.log(seller);
    return (
        <div className="overflow-x-auto w-full">
            <div className='text-center mb-5'>
                <p className='text-xl md:text-4xl font-bold'>The seller Update Screen</p>
                <h2>Total users:{seller?.length}</h2>
            </div>
            <table className="table md:w-full">
                <thead>
                    <tr className='border bg-orange-500'>

                        <th>username</th>
                        <th>Email address</th>
                        <th>Remove</th>

                    </tr>
                </thead>
                {
                    seller?.map(d => <tbody key={d._id}>
                        <tr className='border'>
                            <td>
                                <div className="flex flex-col items-center space-x-2">
                                    <div className="avatar">
                                        <div className="mask w-20 h-20">
                                            <img src={d.picture} alt='img' />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{d.username}</div>
                                        <div className="text-sm opacity-50">{d.location}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {d.phone}
                                <br />
                                <span className="badge badge-ghost badge-sm">{d.email}</span>
                            </td>
                            <th>
                                <Link> <button onClick={() => handleDelete(d._id)} className="btn btn-outline btn-primary btn-sm">Remove</button></Link>
                            </th>
                        </tr>
                    </tbody>)}
                <tfoot>
                    <tr>
                    </tr>
                </tfoot>
            </table>
        </div >
    );
};

export default Seller;