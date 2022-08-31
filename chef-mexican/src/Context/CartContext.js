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
	removeItemFromCart: (mealId) => {},
	updateCartPrice: (mealPrice, mealQantity) => {},
	updateCartPriceRemove: (mealPrice) => {},
});

export const CartContextProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const [price, setPrice] = useState(0);

	const updateCartPriceHandler = (mealPrice, mealQantity) => {
		let currentCartPrice = price;

		let newCartPrice = currentCartPrice + mealPrice * mealQantity;

		setPrice(newCartPrice);
	};

	const AddMealHandler = (meal) => {
		if (meal.quantity > 0) {
			//Check if meal already exists in cart
			let ids = cart.filter((x) => x.id);

			// 	const original = cart.filter((x) => x.id == meal.id);
			// 	const newItems = cart.filter((item) => item.id !== meal.id);

			// 	console.log(newItems);

			// 	const newMeal = {
			// 		id: meal.id,
			// 		title: meal.title,
			// 		quantity: meal.quantity + original[0].quantity,
			// 		price: meal.price,
			// 	};

			// 	setCart((prevState) => {
			// 		console.log(prevState);
			// 	});
			// }

			setCart((previousState) => {
				return [...previousState, meal];
			});
		}
	};

	const removeMealHandler = (mealIdToRemove) => {
		const newItemsInCart = cart.filter((meal) => meal.id !== mealIdToRemove);
		setCart(newItemsInCart);
	};

	const UpdatePriceRemoveHandler = (mealPrice) => {
		const newCartPrice = price - mealPrice;
		setPrice(newCartPrice);
	};

	return (
		<CartContext.Provider
			value={{
				cart: cart,
				price: price,
				addItemToCart: AddMealHandler,
				removeItemFromCart: removeMealHandler,
				updateCartPrice: updateCartPriceHandler,
				updateCartPriceRemove: UpdatePriceRemoveHandler,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartContext;
