import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const DeleteProducts = () => {
    // this use for view by id
    const Mobile = useLoaderData();
    const { _id, name, version } = Mobile;
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

    const handleReset = event => {
        event.preventDefault();
        event.target.reset();
    }

    const handleDelete = Mobile => {
        const procced = window.confirm(`Are you sure to delete???? : ${name}`)
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
                        handleReset();
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
                            <figure className="px-10 pt-10">
                                <img src="https://placeimg.com/400/225/arch" alt="img" className="rounded-xl" />
                            </figure>
                            <h2 className="card-title">{name}</h2>
                            <p>version:{version}</p>
                            <div className="card-actions">
                                <button className='btn' onClick={() => handleDelete(Mobile)}>Delete</button>
                            </div>
                        </div>
                        <div>Return <Link to='/seeAllProducts'><button className='btn btn-outline btn-warning'>View Products</button>
                        </Link></div>
                    </div>
                    : <div className='card'>
                        <div className='card-title'>All Mobile successfully deleted</div>
                        <div className='card-actions'>Return <Link to='/seeAllProducts'><button className='btn btn-outline btn-warning'>View Mobile Products Screen</button>
                        </Link></div>
                    </div>
            }
        </form >
    );
};

export default DeleteProducts;