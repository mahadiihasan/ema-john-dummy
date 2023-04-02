import React, { useEffect, useState } from 'react';

import './shop.css'
import Product from '../Product/Product';

const Shop = () => {

    //loading product data from json
    const [products, setProducts] = useState([]);
    //add product to cart
    const [cart, setCart] = useState([]);

    useEffect( () => {
        fetch('products.json')
        .then(response => response.json())
        .then(data => setProducts(data))
    },[])


    const handleAddToCart = (product)=>{
        //create new cart
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {/* <h4>Prodcuts coming soon: {products.length}</h4> */}

                {
                    products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                }

            </div>
            <div className="cart-container">
                <h6>Order Summery</h6>
                <p>Selected Items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;