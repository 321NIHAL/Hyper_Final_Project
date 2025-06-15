import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length + 1; index++) {
        cart[index] = 0;
    }
    return cart;
};

const ShopContextProvider = (props) => {
    const [cartItem, setCartItem] = useState(getDefaultCart());

    const addToCart = (itemid) => {
        setCartItem((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }));
        console.log("Item added to cart:", itemid);
    };

    const removFromCart = (itemid) => {
        setCartItem((prev) => ({ ...prev, [itemid]: prev[itemid] - 1 }));
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                const itemInfo = all_product.find((product) => product.id === Number(item));
                if (itemInfo) {
                    totalAmount += itemInfo.new_price * cartItem[item];
                }
            }
        }
        return totalAmount;
    };

    

    const getTotalCartitems = () =>{
        let totalitem = 0
        for(let item in  cartItem){
            if (cartItem[item]>0){
                totalitem+=cartItem[item]
            }
        }
        return totalitem
    }

    const ContextValue = {
        getTotalCartitems,
        getTotalCartAmount,
        All_Product: all_product,
        cartItem,
        addToCart,
        removFromCart
    };

    return (
        <ShopContext.Provider value={ContextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
