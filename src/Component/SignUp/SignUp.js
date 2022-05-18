import React, { useEffect } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';

import auth from '../../firebase.init';
import Spinner from '../Spinner/Spinner';
const SignUp = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile] = useUpdateProfile(auth);
    const navigate = useNavigate();
    const handelSignUp = async (event) => {
        event.preventDefault();
        const displayName = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName });
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
            <h2 className='text-lg text-primary text-center my-2'>Sign Up</h2>
            <form onSubmit={handelSignUp} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                {error && <h2 className='text-center text-orange-500'>{error?.message}</h2>}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your Name" required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your Email" required />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input name="password" className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" required />

                </div>
                <div className="flex items-center justify-between">
                    <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Sign Up
                    </button>

                </div>
                <div className="mt-2">
                    <h2 className='text-sm'>Already have an account?<Link className='text-orange-400' to='/login'>Login!</Link></h2>
                </div>
            </form>

        </div>
    );
};

export default SignUp;