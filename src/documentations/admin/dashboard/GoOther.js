import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useTitle from '../../../components/Hooks/useTitle';
import { AuthContext } from '../../../ContextApi/Context';

const GoOther = () => {
    useTitle('Update Product');
    const [mobile, setMobile] = useState([])
    const { user } = useContext(AuthContext)
    useEffect(() => {
        fetch(`https://mobile-server.vercel.app/mobile`)
            .then(res => res.json())
            .then(data => setMobile(data))
    }, [user])
    console.log(mobile);
    return (
        <div className="overflow-x-auto w-full rounded">
            <div className='text-center mb-5'>
                <p className='text-xl lg:text-2xl font-bold'>The Seller Update Screen</p>
                <h2>Total Mobiles:{mobile?.length}</h2>
            </div>
            <table className="table lg:w-full">
                <thead>
                    <tr className='border bg-orange-500'>
                        <th>Brand</th>
                        <th>Category</th>
                        <th>resell-price</th>
                        <th>Update</th>
                    </tr>
                </thead>
                {
                    mobile?.map(d => <tbody key={d._id}>
                        <tr className='border'>
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
                                <Link to={`/admindashboard/update/${d._id}`}> <button className="btn btn-outline btn-primary btn-sm">update</button></Link>
                            </th>
                        </tr>
                    </tbody>)}
                <tfoot>
                    <tr>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}

export default GoOther;