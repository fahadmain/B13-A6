import React from 'react';

const Steps = () => {
    return (
        <div className='w-11/12 mx-auto mt-20'>
            <div className='text-center'>
                <h1 className='text-4xl font-bold'>Get Started in 3 Steps</h1>
                <p className='text-gray-500 text-sm mt-4'>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 mt-12 gap-5'>
                <div className='border border-gray-400 p-5 rounded-xl text-center bg-gray-200'>
                    <div className='text-end'>
                        <span className='bg-linear-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-full p-1'>01</span>
                    </div>
                    <div className='mt-5 flex justify-center'>
                        <img src="/public/assets/user.png" alt="" />
                    </div>
                    <h2 className='text-2xl font-bold mt-5'>Create Account</h2>
                    <p className='text-gray-500 mt-3'>Sign up for free in seconds. No credit card required to get started.</p>
                </div>
                <div className='border border-gray-400 p-5 rounded-xl text-center bg-gray-200'>
                    <div className='text-end'>
                        <span className='bg-linear-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-full p-1'>02</span>
                    </div>
                    <div className='mt-5 flex justify-center'>
                        <img src="/public/assets/package.png" alt="" />
                    </div>
                    <h2 className='text-2xl font-bold mt-5'>Choose Products</h2>
                    <p className='text-gray-500 mt-3'>Browse our catalog and select the tools
                        that fit your needs.</p>
                </div>
                <div className='border border-gray-400 p-5 rounded-xl text-center bg-gray-200'>
                    <div className='text-end'>
                        <span className='bg-linear-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-full p-1'>03</span>
                    </div>
                    <div className='mt-5 flex justify-center'>
                        <img src="/public/assets/rocket.png" alt="" />
                    </div>
                    <h2 className='text-2xl font-bold mt-5'>Start Creating</h2>
                    <p className='text-gray-500 mt-3'>Download and start using your premium
                        tools immediately.</p>
                </div>
            </div>
        </div>
    );
};

export default Steps;