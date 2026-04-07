import { toast } from "react-toastify";


const Cart = ({ carts, setCarts }) => {

    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0)

    const handlePayment = () => {
        setCarts([])
        toast.success("Payment Successful")
    }

    const handleDelete = (item) => {
        const filteredArray = carts.filter(c => c.id !== item.id)
        setCarts(filteredArray)
        toast.error("Item remove from the cart")
    }

    return (
        <div className="w-11/12 mx-auto border border-gray-300 rounded-xl p-5">
            <h1 className="text-2xl font-bold mb-8">Your Cart</h1>

            {carts.length === 0 ? <p className="text-center font-bold">Cart Is Empty</p> : <>
                {
                    carts.map(cart => <div key={cart.id} className="flex bg-zinc-100 rounded-xl p-5 mb-5 justify-between">
                        <div className="flex gap-3 items-center">
                            <img className="" src={cart.image} alt="" />
                            <div>
                                <h2 className="font-bold">{cart.name}</h2>
                                <p className="text-sm text-gray-500">${cart.price}</p>
                            </div>
                        </div>
                        <button onClick={()=> handleDelete(cart)} className="text-red-500 btn">Remove</button>
                    </div>)
                }
                <div className="flex
            bg-zinc-100 rounded-xl p-5 justify-between">
                    <div className="text-gray-500">
                        Total
                    </div>
                    <div className="font-bold">
                        ${totalPrice}
                    </div>
                </div>
                <button onClick={handlePayment} className='bg-linear-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-full btn mt-8 w-full'>Proceed  To Checkout</button>
            </>}


        </div>
    );
};

export default Cart;