import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div class="w-full max-w-xs mx-auto mt-20">
            <h2 className='text-2xl text-primary text-center my-10'>TODO APP</h2>
            <h2 className='text-lg text-primary text-center my-2'>Sign In</h2>
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Email
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="Your Email" required />
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Password
                    </label>
                    <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" required />

                </div>
                <div class="flex items-center justify-between">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Sign In
                    </button>
                    <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                        Forgot Password?
                    </a>
                </div>
                <div className="mt-2">
                    <h2 className='text-sm'>Don’t have an account? <Link className='text-orange-400' to='/signup'>Sign Up Now!</Link></h2>
                </div>
            </form>

        </div>
    );
};

export default Login;