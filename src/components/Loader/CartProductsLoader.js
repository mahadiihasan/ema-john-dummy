// custom loader

import { getShoppingCart } from "../../../utilities/fakedb";


const cartProductLoader = async () => {

    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();

    // if cart data in in database, you have to use async await
    const storedCart = getShoppingCart();
    const savedCart = [];
    // console.log(storedCart)
    for (const id in storedCart){
        const addedProduct = products.find(product => product.id === id);

        if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }


    console.log(savedCart);
    return savedCart;

}

export default cartProductLoader;