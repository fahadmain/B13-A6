import { Check } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";


const ModelCard = ({model, carts, setCarts}) => {
    const [isAdded, setIsAdded] = useState(false)
    const handleAdded = () =>{
        setIsAdded(true)

        const isFound = carts.find(item => item.id === model.id)

        if(isFound) {
            toast.error("Item already in cart!!")
            return
        }

        setCarts([...carts, model])
        toast.success("Item added to cart")
    }
    return (
        <div className='p-5 border border-gray-300 rounded-2xl shadow-2xl'>
            <div className='mb-5 font-bold flex flex-row justify-end'><p className=' bg-[#fef3c6FF] text-yellow-600 w-25 text-center rounded-xl p-1'>{model.tag}</p></div>
            <img src={model.image} alt="" />
            <h3 className='text-2xl font-bold mt-5'>{model.name}</h3>
            <p className='text-gray-500 mt-5'>{model.description}</p>
            <p className='mt-3'><span className='font-bold text-xl'>${model.price}</span><span className='text-gray-500 text-sm'>/{model.period}</span></p>
            <div className='mt-5'>
                <p className='flex gap-1 text-green-500'><Check></Check><span className='text-gray-500'>{model.features1}</span></p>
                <p className='flex gap-1 text-green-500'><Check></Check><span className='text-gray-500'>{model.features2}</span></p>
                <p className='flex gap-1 text-green-500'><Check></Check><span className='text-gray-500'>{model.features3}</span></p>
            </div>
            <button onClick={handleAdded} className='bg-linear-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-full btn w-full mt-7'>{isAdded ? "Added to Cart" : "Buy Now"}</button>
        </div>
    );
};

export default ModelCard;