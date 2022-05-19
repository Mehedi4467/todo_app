import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddTask = ({ refetch }) => {
    const [loading, setLoading] = useState(false);
    const [user] = useAuthState(auth);
    const addTask = (event) => {
        event.preventDefault();
        setLoading(true);
        const title = event.target.title.value;
        const description = event.target.description.value;
        const status = true;
        const email = user.email;
        const taskData = { title, description, email, status };
        fetch('http://localhost:5000/task', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(taskData)
        })
            .then(res => res.json())
            .then(data => {

                if (data.acknowledged) {
                    toast("Your Task Added Successfully!");
                    setLoading(false);
                    refetch();
                }
                else {
                    toast.error("Something is wrong Please Try Again!")
                }
            })
    }
    return (
        <div>

            <input type="checkbox" id="add-task-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="add-task-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-center text-primary underline underline-offset-4">Add Task</h3>
                    <div className='mx-6 my-4'>
                        <form onSubmit={addTask}>
                            <div className='mb-4'>
                                <input name="title" type="text" placeholder="Task Title" className="input input-bordered input-primary w-full" required />
                            </div>

                            <div className='mb-4'>
                                <textarea name="description" className="textarea w-full textarea-primary" placeholder="Task Description" required />
                            </div>

                            {
                                loading ? <button type="button" className="text-white btn-primary btn w-full" disabled>
                                    <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">

                                    </svg>
                                    Processing...
                                </button> : <button className='text-white btn-primary btn w-full'>Add Task</button>
                            }
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AddTask;