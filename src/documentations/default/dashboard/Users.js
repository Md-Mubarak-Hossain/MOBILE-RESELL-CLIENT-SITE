import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        fetch('https://mobile-server.vercel.app/user')
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])
    console.log(user);
    const handleDelete = id => {
        const procced = window.confirm(`Are you sure to delete??`)
        if (procced) {
            fetch(`https://mobile-server.vercel.app/user/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('successfully deleted')
                        const remainUser = user.filter(d => d._id !== id)
                        setUser(remainUser);
                        user();
                    }

                })
        }
    }
    return (
        <div className="overflow-x-auto w-full">
            <div className='text-center mb-5'>
                <p className='text-xl lg:text-4xl font-bold'>The User Update Screen</p>
                <h2>Total users:{user.length}</h2>
            </div>
            <table className="table lg:w-full">
                <thead>
                    <tr className='border bg-orange-500'>
                        <th></th>
                        <th>username</th>
                        <th>Address</th>

                    </tr>
                </thead>
                {
                    user.map(d => <tbody key={d._id}>
                        <tr className='border'>
                            <td>
                                <div className="flex items-center space-x-2">
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
                            <td>
                                <span className="badge badge-ghost badge-sm">{d.password}</span>
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

export default Users;