import React, { useContext, useState } from 'react';
import useTitle from '../../../components/Hooks/useTitle';
import { FaRegAddressBook } from 'react-icons/fa';
import { AuthContext } from '../../../ContextApi/Context';
import Login from '../Login/UserLogin/Login';
import { setAuthToken } from '../../../components/Api/auth';
import { useLocation, useNavigate } from 'react-router-dom';
const Register = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';
    const [error, setError] = useState('');
    const { createUser } = useContext(AuthContext);
    useTitle('Register Page');
    const handleSub = event => {
        event.preventDefault();
        const form = event.target;
        const username = form.username.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const location = form.location.value;
        const password = form.password.value;
        const picture = form.picture.value;
        if (password.length > 6) {
            setError('')
            createUser(email, password)
                .then(result => {
                    const user = result.user;
                    setAuthToken(user);
                    console.log(user)
                    navigate(from, { replace: true })
                })
                .catch(err => console.error(err))

            const userRegister = {
                username, phone, email, location, password, picture
            }
            fetch('https://mobile-server.vercel.app/user', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(userRegister)

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.acknowledged) {
                        alert('Successfully register')
                        return <Login></Login>
                    }
                    else {
                        alert('sorry');
                    }
                })
        }
        else {
            return setError('Password must be more than 6 characters.')
        }
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row-reverse">
                    <div className="text-center md:text-left">
                        <h1 className="text-5xl font-bold">Register Here</h1>
                        <p className="py-6 text-9xl font-extrabold text-orange-600">
                            <FaRegAddressBook></FaRegAddressBook>
                        </p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSub} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">username</span>
                                </label>
                                <input type="text" placeholder="username" name='username' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <input type="number" placeholder="contact number" name='phone' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Location</span>
                                </label>
                                <input type="text" placeholder="location" name='location' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Profile Photo</span>
                                </label>
                                <input type="text" placeholder="Photo url" name='picture' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <p className='text-red-900 text-sm'>{error}</p>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Register;