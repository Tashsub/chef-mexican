import React, { createContext, useState } from "react";

/*
Meal

	id: 1,
    title: "The Loaded",
    quantity: 2,
    price: 11,

*/

const CartContext = createContext({
	cart: [],
	addItemToCart: (meal) => {},
	price: 0,
	updateCartPrice: (mealPrice, mealQantity) => {},
});

export const CartContextProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const [price, setPrice] = useState(0);

	const updateCartPriceHandler = (mealPrice, mealQantity) => {
        
		let currentCartPrice = price;

		let newCartPrice = currentCartPrice + (mealPrice * mealQantity);
		
        setPrice(newCartPrice);
	};

	const AddMealHandler = (meal) => {
		if (meal.quantity > 0) {
			setCart((previousState) => {
				return [...previousState, meal];
			});
		}
	};

	return (
		<CartContext.Provider
			value={{
				cart: cart,
				addItemToCart: AddMealHandler,
				price: price,
				updateCartPrice: updateCartPriceHandler,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartContext;
