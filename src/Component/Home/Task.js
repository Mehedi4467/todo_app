import React from 'react';

const Task = () => {
    return (
        <div className='w-full'>
            <div className=' mx-4'>
                <div className='my-4 shadow-lg p-4 rounded-lg'>
                    <div className='flex justify-between items-center mb-4'>
                        <h2 className='text-primary font-semibold'>Bazar korte Hobe</h2>
                        <div className='flex items-center'>
                            <div className='mr-4 cursor-pointer shadow-lg rounded-full h-6 w-6 flex items-center justify-center'>
                                <i className="text-xs text-primary fa-solid fa-trash-can"></i>
                            </div>
                            <div className='cursor-pointer shadow-lg rounded-full h-6 w-6 flex items-center justify-center'>
                                <i className="text-xs fa-solid fa-check"></i>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='w-full text-sm text-slate-400'>In publishing and graphic design,</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Task;