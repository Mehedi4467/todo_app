import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Spinner from '../Spinner/Spinner';
import AddTask from './AddTask';
import Task from './Task';
import './Home.css';

const TodoApp = () => {
    const [user] = useAuthState(auth);
    const { isLoading, data, refetch } = useQuery('taskData', () =>
        fetch(`http://localhost:5000/task/${user.email}`).then(res =>
            res.json()
        )
    );

    if (isLoading) {
        <Spinner></Spinner>
    }
    return (
        <div>
            <div className="mockup-phone ">
                <div className="camera"></div>
                <div className="display relative ">

                    <h2 className=' absolute right-[50%] w-full left-[35%] top-10 text-2xl text-primary underline underline-offset-4 font-bold'>My Task</h2>

                    <div className="artboard artboard-demo phone-1  overflow-x-auto pt-[300px] pb-[60px]">



                        {
                            data?.length !== 0 ? data?.map(task => <Task key={task._id} refetch={refetch} task={task}></Task>) : <p className='text-primary'>You have no current task!</p>
                        }


                        <AddTask refetch={refetch}></AddTask>
                        <label htmlFor="add-task-modal" className=" absolute bottom-10 right-10 cursor-pointer h-16 w-16 rounded-full opacity-75 ">
                            <div className='h-16 w-16 shadow-lg rounded-full flex justify-center items-center '>
                                <div className='absolute animate-ping h-16 w-16 rounded-full bg-sky-400 opacity-75'></div>
                                <i className="text-primary text-xl fa-solid fa-circle-plus"></i>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default TodoApp;