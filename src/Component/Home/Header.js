import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Spinner from '../Spinner/Spinner';

const Header = () => {
    const [user, loading] = useAuthState(auth);
    if (loading) {
        return <Spinner></Spinner>
    }
    return (
        <div>
            <div className="container ,x-auto navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/">Home</Link></li>
                            {user ? <li><button onClick={() => signOut(auth)}>Log Out</button></li> : <li><Link to='/login'>Login</Link></li>}

                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <Link to='/' className="md:ml-20 btn btn-ghost text-primary normal-case text-xl">TODO APP</Link>
                </div>
                <div className="navbar-end">


                    {user && <button onClick={() => signOut(auth)} className="btn btn-ghost btn-circle">

                        <i className="text-xl text-primary fa-solid fa-right-from-bracket"></i>


                    </button>

                    }


                </div>
            </div>
        </div >
    );
};

export default Header;