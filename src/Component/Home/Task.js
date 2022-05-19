import React from 'react';
import { toast } from 'react-toastify';



const Task = ({ task, refetch }) => {
    const { title, description, status } = task.task;
    const deleteTask = (id) => {
        fetch(`https://todo-my-app.herokuapp.com/task/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast('Task Delete Successfully!');
                    refetch();
                }
            });

    };

    const complatedTask = (id) => {
        fetch(`https://todo-my-app.herokuapp.com/task/${id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json',
            }

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast("Task Complated!");
                    refetch();
                }
            })
    }
    return (
        <div className='w-full '>
            <div className=' mx-4'>
                <div className='my-4 shadow-lg p-4 rounded-lg'>
                    <div className='flex justify-between items-center mb-4'>
                        <h2 className={`text-primary font-semibold ${status || 'line-through'}`}>{title}</h2>
                        <div className='flex items-center'>
                            <div onClick={() => deleteTask(task._id)} className='hover:bg-primary  mr-4 cursor-pointer shadow-lg rounded-full h-6 w-6 flex items-center justify-center'>
                                <i className="text-xs text-primary hover:text-white fa-solid fa-trash-can"></i>
                            </div>
                            <button onClick={() => complatedTask(task._id)} className={`cursor-pointer hover:bg-primary hover:text-white shadow-lg rounded-full h-6 w-6 flex items-center justify-center ${status || 'bg-primary cursor-not-allowed'}`} disabled={!status}>
                                <i className="text-xs fa-solid fa-check"></i>
                            </button>
                        </div>
                    </div>
                    <div>
                        <p className={`w-full text-sm text-slate-400 ${status || 'line-through'}`}>{description}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Task;