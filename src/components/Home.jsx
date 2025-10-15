import React from 'react'
import data from "./Data.js"
const Home = ({ myCart, setMyCart }) => {
    const handleAddToCart = (item) => {
        const existingItem = myCart.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            const updatedCart = myCart.map(cartItem => {
                if (cartItem.id === item.id) {
                    return { ...cartItem, quantity: cartItem.quantity + 1 };
                }
                return cartItem;
            });
            setMyCart(updatedCart);
            return;
        }
        setMyCart([...myCart, item])
        console.log(myCart);

    }
    return (
        <div className='container'>
            <div className='flex flex-wrap justify-center anim' style={{animationDelay:"0.5s"}}>
                {
                    data.map((item) => {
                        return (
                            <div className='m-5 p-5 border-2 border-gray-300 rounded-lg shadow-lg' key={item.id}>
                                <img src={item.image} alt={item.name} className='w-96 h-60 object-cover mb-4 rounded-lg' />
                                <h2 className='text-xl font-bold mb-2'>{item.name}</h2>
                                <p className='text-gray-700 mb-2'>Price: ${item.amount}</p>
                                <p className='text-gray-700 mb-2'>Category: {item.category} </p>
                                <p className='text-gray-700 mb-2'>Brand: {item.brand}</p>
                                <p className='text-gray-700 mb-2'>Color: {item.color}</p>
                                <p className='text-gray-700 mb-2'>Year: {item.year}</p>
                                <button onClick={() => { handleAddToCart(item) }} className='bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 hover:scale-105 duration-300
                                '>Book Now</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home
