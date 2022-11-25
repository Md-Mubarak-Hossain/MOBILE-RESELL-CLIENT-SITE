import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const UpadeteScreen = () => {
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
        <div className="overflow-x-auto w-full">
            <div className='text-center mb-5'>
                <p className='text-xl lg:text-4xl font-bold'>The Seller Update Screen</p>
                <h2>Total Mobiles:{mobile.length}</h2>
            </div>
            <table className="table lg:w-full">
                <thead>
                    <tr className='border bg-orange-500'>
                        <th>Delete</th>
                        <th>Brand</th>
                        <th>Category</th>
                        <th>resell-price</th>
                        <th>Update</th>
                    </tr>
                </thead>
                {
                    mobile.map(d => <tbody key={d._id}>
                        <tr className='border'>
                            <th>
                                <Link to={`/deleteSellerProduct/${d._id}`}><button className="btn btn-outline btn-primary btn-sm">X</button></Link>
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
                            <td>'$'{d.resalePrice}</td>
                            <th>
                                <Link to={`/updateSellerProduct/${d._id}`}> <button className="btn btn-outline btn-primary btn-sm">update</button></Link>
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

export default UpadeteScreen;