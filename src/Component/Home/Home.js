import React from 'react';
import Header from './Header';
import TodoApp from './TodoApp';


const Home = () => {

    return (
        <div>
            <Header></Header>
            <div className='flex justify-center'>
                <TodoApp></TodoApp>
            </div>
        </div>
    );
};

export default Home;