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
	price: 0,
	addItemToCart: (meal) => {},
	removeItemFromCart: (mealId)=>{},
	updateCartPrice: (mealPrice, mealQantity) => {},
	updateCartPriceRemove: (mealPrice) =>{}
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
		console.log("ccccc")
		if (meal.quantity > 0) {
			setCart((previousState) => {
				return [...previousState, meal];
			});
		}
	};

	const removeMealHandler = (mealIdToRemove) => {
		console.log("ssfdf");
		const newItemsInCart = cart.filter(meal=> meal.id !== mealIdToRemove); 
		setCart(newItemsInCart);
	};

	const UpdatePriceRemoveHandler =(mealPrice)=>{
		console.log("eeeeeeee")
		const newCartPrice = price - mealPrice; 
		setPrice(newCartPrice); 
	}

	return (
		<CartContext.Provider
			value={{
				cart: cart,
				price: price,
				addItemToCart: AddMealHandler,
				removeItemFromCart: removeMealHandler,
				updateCartPrice: updateCartPriceHandler,
				updateCartPriceRemove: UpdatePriceRemoveHandler 
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartContext;
