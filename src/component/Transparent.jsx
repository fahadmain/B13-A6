import { Check } from 'lucide-react';
import React from 'react';

const Transparent = () => {
    return (
        <div className='w-11/12 mx-auto mt-20'>
            <div className='text-center'>
                <h1 className='text-4xl font-bold'>Simple, Transparent Pricing</h1>
                <p className='text-gray-500 text-sm mt-4'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div className=' grid md:grid-cols-2 lg:grid-cols-3 mt-16 gap-6'>
                <div className='p-5 rounded-xl border border-gray-200 bg-gray-100'>
                    <div>
                        <h2 className='text-2xl font-bold'>Starter</h2>
                        <p className='text-gray-500'>Perfect for getting started</p>
                    </div>
                    <p className='mt-6'><span className='text-2xl font-bold'>$0</span><span className='text-gray-500'>/Month</span></p>
                    <div className='mt-5'>
                        <p className='flex gap-2'><Check className='text-green-500'></Check><span>Access to 10 free tools</span></p>
                        <p className='flex gap-2'><Check className='text-green-500'></Check><span>Basic templates</span></p>
                        <p className='flex gap-2'><Check className='text-green-500'></Check><span>Community support</span></p>
                        <p className='flex gap-2'><Check className='text-green-500'></Check><span>1 project per month</span></p>
                    </div>
                    <button className='bg-linear-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-full btn w-full mt-16'>Get Started Free</button>

                </div>

                <div className='p-5 rounded-xl border border-gray-200 bg-linear-to-r from-indigo-600 to-purple-600 text-white'>
                    <div className='bg-orange-200 text-orange-600 text-center rounded-xl w-25 text-sm font-bold relative bottom-7 left-40'>Most Popular</div>
                    <div>
                        <h2 className='text-2xl font-bold'>Pro</h2>
                        <p>Best for professionals</p>
                    </div>
                    <p className='mt-6'><span className='text-2xl font-bold'>$29</span>/Month</p>
                    <div className='mt-5'>
                        <p className='flex gap-2'><Check className='text-green-500'></Check><span>Access to all premium tools</span></p>
                        <p className='flex gap-2'><Check className='text-green-500'></Check><span>Unlimited templates</span></p>
                        <p className='flex gap-2'><Check className='text-green-500'></Check><span>Priority support</span></p>
                        <p className='flex gap-2'><Check className='text-green-500'></Check><span>Unlimited projects</span></p>
                        <p className='flex gap-2'><Check className='text-green-500'></Check><span>Cloud sync</span></p>
                        <p className='flex gap-2'><Check className='text-green-500'></Check><span>Advanced analytics</span></p>
                    </div>
                    <button className='btn w-full text-purple-500 bg-white rounded-full font-bold mt-4'>Start Pro Trial</button>

                </div>



                <div className='p-5 rounded-xl border border-gray-200 bg-gray-100'>
                    <div>
                        <h2 className='text-2xl font-bold'>Enterprise</h2>
                        <p className='text-gray-500'>For teams and businesses</p>
                    </div>
                    <p className='mt-6'><span className='text-2xl font-bold'>$99</span><span className='text-gray-500'>/Month</span></p>
                    <div className='mt-5'>
                        <p className='flex gap-2'><Check className='text-green-500'></Check><span>Everything in Pro</span></p>
                        <p className='flex gap-2'><Check className='text-green-500'></Check><span>Team collaboration</span></p>
                        <p className='flex gap-2'><Check className='text-green-500'></Check><span>Custom integrations</span></p>
                        <p className='flex gap-2'><Check className='text-green-500'></Check><span>Dedicated support</span></p>
                        <p className='flex gap-2'><Check className='text-green-500'></Check><span>SLA guarantee</span></p>
                        <p className='flex gap-2'><Check className='text-green-500'></Check><span>Custom branding</span></p>
                    </div>
                    <button className='bg-linear-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-full btn w-full mt-4'>Contact Sales</button>

                </div>

            </div>
        </div>
    );
};

export default Transparent;