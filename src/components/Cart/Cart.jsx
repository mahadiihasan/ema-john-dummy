import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const Cart = ({ cart, handleClearCart }) => {

    // const {cart} = props;
    // console.log(cart);

    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0

    for (const product of cart) {
        product.quantity = product.quantity || 1;
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;

    }

    const tax = totalPrice * .07;
    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className='cart'>
            <h6>Order Summery</h6>
            <p>Selected Items: {quantity}</p>
            <p>Total price: $ {totalPrice}</p>
            <p>Total Shipping: $ {totalShipping}</p>
            <p>Tax: $ {tax.toFixed(2)}</p>
            <h6>Grand Total: $ {grandTotal.toFixed(2)}</h6>
            <button onClick={handleClearCart} className='btn-clear-cart'><span>Clear Cart</span><FontAwesomeIcon icon={faTrashCan}/></button>

        </div>
    );
};

export default Cart;