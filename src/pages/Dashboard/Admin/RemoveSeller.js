import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../../components/Hooks/useTitle';

const RemoveSeller = () => {
    useTitle('Remove Seller');
    // this use for view by id
    const User = useLoaderData();
    const { _id, username, password, picture, email, phone, location } = User;
    const [previousUser, setPreviousUser] = useState([])
    const [restUser, setUser] = useState(previousUser);

    // get all Mobile for update
    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setPreviousUser(data)
            })
    }, [])
    console.log(User)

    const handleReset = event => {
        event.preventDefault();
        event.target.reset();
    }

    const handleDelete = User => {
        const procced = window.confirm(`Are you sure to delete??:${username}`)
        if (procced) {
            fetch(`http://localhost:5000/user/${_id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('successfully deleted')
                        const remainUser = restUser.filter(d => d._id !== User._id)
                        setPreviousUser(remainUser);
                        handleReset();
                    }

                })
        }
    }

    return (
        <form>
            {
                User._id ?
                    <div>
                        <div className="card  shadow-xl justify-center items-center my-5 pb-10">
                            <figure className="px-10 pt-10">
                                <img src={picture} alt="img" className="rounded-xl" />
                            </figure>
                            <h2 className="card-title">{username}</h2>
                            <p>Location:{location}</p>
                            <p>Phone:{phone}</p>
                            <p>Email:{email}</p>
                            <p>Password:{password}</p>
                            <div className="card-actions">
                                <button className='btn' onClick={() => handleDelete(User)}>Delete</button>
                            </div>
                        </div>
                        <div>Return <Link to='/seeAllProducts'><button className='btn btn-outline btn-warning'>View Products</button>
                        </Link></div>
                    </div>
                    : <div className='card'>
                        <div className='card-title'>All Mobile successfully deleted</div>
                        <div className='card-actions'>Return <Link to='/SellerScreen'><button className='btn btn-outline btn-warning'>View Seller Screen</button>
                        </Link></div>
                    </div>
            }
        </form >
    );
};

export default RemoveSeller;