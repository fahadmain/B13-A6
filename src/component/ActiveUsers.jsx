import React from 'react';

const ActiveUsers = () => {
    return (
        <div className='bg-linear-to-r from-indigo-600 to-purple-600 h-40 mt-12 grid grid-cols-3 items-center place-items-center'>
            <div className='text-white'>
                <h2 className='text-5xl font-bold mb-2'>50K+</h2>
                <p>Active Users</p>
            </div>
            <div className='text-white'>
                <h2 className='text-5xl font-bold mb-2'>200+</h2>
                <p>Premimum Tools</p>
            </div>
            <div className='text-white'>
                <h2 className='text-5xl font-bold mb-2'>4.9</h2>
                <p>Rating</p>
            </div>
            
        </div>
    );
};

export default ActiveUsers;