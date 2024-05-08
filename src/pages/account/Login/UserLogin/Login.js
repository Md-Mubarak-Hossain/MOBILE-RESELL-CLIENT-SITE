import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import useTitle from '../../../../components/Hooks/useTitle';
import userlogin from '../../../../assets/userlogin.jpg';
import { AuthContext } from '../../../../ContextApi/Context';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { setAuthToken } from '../../../../components/Api/auth';

const Login = () => {
    const { googleLogIn, logIn } = useContext(AuthContext);
    useTitle('User Login');
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/userdashboard';
    const handleSub = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setAuthToken(user);
                navigate(from, { replace: true })
                alert('successfully login')

            })
            .catch(err => console.error(err))
    }
    const googleLogin = () => {
        googleLogIn()
            .then(result => {
                const user = result.user
                console.log(user)
                setAuthToken(user);
                navigate(from, { replace: true })
                const username = user?.displayName
                const email = user?.email
                const picture = user?.photoURL
                const userPost = {
                    username,
                    email,
                    picture
                }
                fetch('https://mobile-server.vercel.app/user', {
                    method: 'POST',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(userPost)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.acknowledged) {
                            alert('login success')
                        }
                        else {
                            alert('sorry');
                        }
                    })
            })
            .catch(err => console.error(err))
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            <img src={userlogin} alt="img" className='w-64 rounded-lg shadow-2xl' />
                        </p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSub} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name='email' className="input input-bordered" />
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
                            <div className='divider divider-horizontal'></div>
                            <div className="form-control mt-6">
                                <button onClick={googleLogin} className="btn btn-outline btn-warning w-full"><FcGoogle></FcGoogle>sign in with google</button>

                            </div>
                            <div>
                                <Link to='/register' className='text-xs'>Have not account?<button className='btn btn-link btn-sm text-xs lowercase'>register</button></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Login;