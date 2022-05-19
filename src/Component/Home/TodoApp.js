import React from 'react';
import AddTask from './AddTask';
import Task from './Task';

const TodoApp = () => {
    return (
        <div>
            <div className="mockup-phone">
                <div className="camera"></div>
                <div className="display relative">
                    <div className="artboard artboard-demo phone-1">
                        <h2 className='text-2xl text-primary underline underline-offset-4 font-bold'>My Task</h2>

                        <Task></Task>

                        <AddTask></AddTask>
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