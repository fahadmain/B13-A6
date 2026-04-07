
import React, { use} from 'react';
import ModelCard from './ModelCard';

const Models = ({ modelPromise }) => {
    const models = use(modelPromise)
    


    return (
        <div className='w-11/12 mx-auto mt-16'>
            <div className='text-center'>
                <h2 className='text-3xl font-bold'>Premium Digital Tools</h2>
                <p className='text-gray-500 my-5'>Choose from our curated collection of premium digital products designed <br />
                    to boost your productivity and creativity.</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center'>
                {models.map(model =>
                    <ModelCard model={model}></ModelCard>
                    )}
            </div>
        </div>
    );
};

export default Models;