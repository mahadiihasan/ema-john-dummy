import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'
import { removeFromDb } from '../../../utilities/fakedb';

const Orders = () => {

    const savedCart = useLoaderData();

    const [cart, setCart] = useState(savedCart);
    // console.log(products);

    const handleRemoveFromCart =(id)=>{
        // console.log(id);
        const remaining = cart.filter(pd => pd.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    return (
        <div className='shop-container'>
            <div className='review-container'>
                {/* <h3>{cart.length}</h3>
                 */}

                 {
                    cart.map(product => <ReviewItem
                         key={product.id} 
                         product={product}
                         handleRemoveFromCart = {handleRemoveFromCart}
                         ></ReviewItem>)
                 }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;