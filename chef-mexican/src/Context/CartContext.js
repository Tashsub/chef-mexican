import React, { createContext, useState } from "react";

/*
Meal Schema

	id: 1,
    title: "The Loaded",
    quantity: 2,
    price: 11,

*/


const CartContext = createContext({
	cart: [],
	addItemTocart: () => {},
    quantity: 0
});

export const CartContextProvider = ({ children }) => {

	const [cart, setCart] = useState([]);

    const [quantity, setQuantity] = useState(0);

    const updateQuantity=()=>{
        let numOfItemsInCart = 0; 
        for(let i = 0; i<cart.length; i++ ){
            numOfItemsInCart += cart[i].quantity
        }
        setQuantity(numOfItemsInCart);
    }

    const AddMealHandler=(meal)=>{
        setCart((previousState)=>{
            return [...previousState, meal];
        })
        updateQuantity();
    }

	return (
		<CartContext.Provider value={{ cart: cart, addItemTocart: AddMealHandler, quantity: quantity }}>
			{children}
		</CartContext.Provider>
	);
};

export default CartContext;
