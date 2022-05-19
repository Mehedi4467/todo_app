import React from 'react';

const Spinner = () => {
    return (

        <div class="h-screen mx-auto flex items-center justify-center ">
            <div class="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
        </div>
    );
};

export default Spinner;