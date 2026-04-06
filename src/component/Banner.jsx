
import { Play } from 'lucide-react';
import React from 'react';

const Banner = () => {
    return (
        <div className='grid justify-center lg:grid-cols-2 gap-5 mt-12  w-11/12 mx-auto'>
            <div>
                <div className='flex items-center gap-2 mb-6'>
                    <div className='bg-linear-to-r from-purple-600 to-indigo-300 w-3 h-3 rounded-full'></div>
                    <p className='text-purple-600 font-bold'>New AI-Powered Tools Available</p>
                </div>
                <h1 className='text-gray-800 text-6xl font-bold mb-6'>Supercharge Your <br />Digital Workflow</h1>
                <p className='mb-8 text-gray-500'>Access premium AI tools, design assets, templates, and productivity <br />software—all in one place. Start creating faster today.</p>
                <button className='bg-linear-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-full btn mr-3'>Explore Products</button>
                <button className='btn btn-outline rounded-full border border-purple-500'><Play className='text-purple-500'></Play><span className='bg-linear-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent font-bold'>Watch Demo</span></button>

            </div>
            <div className='w-2xl'>
                <img className='h-90 w-full' src="/assets/banner.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;