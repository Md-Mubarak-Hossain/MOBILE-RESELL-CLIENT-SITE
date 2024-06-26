import React, { useContext } from 'react';
import useTitle from '../../../../components/Hooks/useTitle';
import login from '../../../../assets/login.jpg';
import { AuthContext } from '../../../../ContextApi/Context';
import { useLocation, useNavigate } from 'react-router-dom';
const AdminLogin = () => {
    useTitle('admin Login');
    const { user, logIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/admindashboard';
    const handleSub = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
                alert('successfully login')

            })
            .catch(err => console.error(err))
    }
    console.log(user)

    return (
        <form onSubmit={handleSub}>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row-reverse">
                    <div className="text-center md:text-left">
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
                                <input type="password" placeholder="password" name='password' className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form >
    );
};

export default AdminLogin;