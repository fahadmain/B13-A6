import { ShoppingCart } from 'lucide-react';
import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-between w-11/12 mx-auto'>
            <p className='bg-linear-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent text-3xl font-bold'>DigiTools</p>
            <div className='font-semibold flex gap-5 items-center'>
                <p>Products</p>
                <p>Features</p>
                <p>Pricing</p>
                <p>Testimonials</p>
                <p>FAQ</p>
            </div>
            <div className='flex gap-5 items-center'>
                <div className='flex gap-4 font-semibold'>
                    <ShoppingCart></ShoppingCart>
                    <p>Login</p>
                </div>
                <button className='bg-linear-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-full btn'>Get Started</button>
            </div>
        </div>
    );
};

export default Navbar;