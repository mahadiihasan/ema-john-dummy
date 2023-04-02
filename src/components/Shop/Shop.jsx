import React, { useEffect, useState } from 'react';

import './shop.css'
import Product from '../Product/Product';

const Shop = () => {

    //loading product data from json
    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch('products.json')
        .then(response => response.json())
        .then(data => setProducts(data))
    },[])


    const handleAddToCart = (product)=>{
        console.log(product);
    }

    return (
        <div className='shop-container container'>
            <div className="products-container">
                {/* <h4>Prodcuts coming soon: {products.length}</h4> */}

                {
                    products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                }

            </div>
            <div className="cart-container">
                <h4>Order Summery</h4>
            </div>
        </div>
    );
};

export default Shop;