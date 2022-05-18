import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Spinner from '../Spinner/Spinner';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const handelLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password)
        signInWithEmailAndPassword(email, password);

    }

    useEffect(() => {
        if (user) {
            navigate('/');
        }

    }, [user, navigate]);


    if (loading) {
        return <Spinner></Spinner>
    }
    return (
        <div className="w-full max-w-xs mx-auto mt-20">
            <h2 className='text-2xl text-primary text-center my-10'>TODO APP</h2>
            <h2 className='text-lg text-primary text-center my-2'>Sign In</h2>
            <form onSubmit={handelLogin} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                {error && <h2 className='text-center text-orange-500'>{error?.message}</h2>}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Email
                    </label>
                    <input name='email' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="Your Email" required />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input name='password' className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" required />

                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Sign In
                    </button>
                    <button className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" >
                        Forgot Password?
                    </button>
                </div>
                <div className="mt-2">
                    <h2 className='text-sm'>Don’t have an account? <Link className='text-orange-400' to='/signup'>Sign Up Now!</Link></h2>
                </div>
            </form>

        </div>
    );
};

export default Login;