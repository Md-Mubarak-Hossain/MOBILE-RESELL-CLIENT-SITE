import React, { useEffect, useState } from 'react';
import useTitle from '../../../../components/Hooks/useTitle';
import login from '../../../../assets/login.jpg';
import AddminDashBoard from '../../../Dashboard/Admin/AddminDashBoard';
import { Link } from 'react-router-dom';
// import { AuthContext } from '../../../../ContextApi/Context';

const AdminLogin = () => {
    useTitle('Admin Login');
    // const { user } = useContext(AuthContext);
    const [admin, setAdmin] = useState([]);
    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/admin')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAdmin(data);
            })
    }, [])
    console.log(admin);
    const handleSub = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const newUser = {
            email: email, password: password
        }
        setUser(newUser)
    }
    console.log(user)
    const onClickHandle = user => {
        user.email === admin[0].email ?
            <>
                <AddminDashBoard></AddminDashBoard>
                <Link to='/'><button className='btn'>Log Out</button></Link>
                <div className='hidden'><AdminLogin></AdminLogin></div>
            </>
            // console.log(admin[0].email, user.email)
            : <>
            </>
    }
    return (
        <form onSubmit={handleSub}>
            <div div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Only Admin Login!</h1>
                        <p className="py-6">
                            <img src={login} alt="img" />
                        </p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" name='password' className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button onClick={() => onClickHandle(user)} className="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form >
    );
};

export default AdminLogin;