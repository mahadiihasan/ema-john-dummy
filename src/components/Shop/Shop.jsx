import React, { useEffect, useState } from 'react';

import './shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../../utilities/fakedb';

const Shop = () => {

    //loading product data from json
    const [products, setProducts] = useState([]);
    //step 4: add product to cart
    const [cart, setCart] = useState([]);

    useEffect( () => {
        fetch('products.json')
        .then(response => response.json())
        .then(data => setProducts(data))
    },[])

    useEffect(()=>{
        // console.log('after dependency', products);
        const storedCart = getShoppingCart();
        //array to save cart products
        const savedCart = [];
        // console.log(storedCart);
        //step 1: get id
        for(const id in storedCart){
            // console.log(id);
            //step 2: get the saved product by using id
            const addedProduct = products.find(product => product.id === id)
            // console.log(addedProduct);
            //step 3: quantity of the product
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                //step 4: 
                savedCart.push(addedProduct);
            }        
            
            // console.log(addedProduct);        
            
        }
        //step 5: set cart with savedCart
        setCart(savedCart);
        console.log(savedCart);

    },[products])


    const handleAddToCart = (product)=>{
        //create new cart
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    }

    const handleClearCart =()=>{
        setCart([]);
        deleteShoppingCart();
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
                <Cart cart={cart} handleClearCart={handleClearCart}></Cart>
            </div>
        </div>
    );
};

export default Shop;