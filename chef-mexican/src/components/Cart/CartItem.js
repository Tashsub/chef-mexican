import React, { useContext } from "react";
import CartContext from "../../Context/CartContext";

export default function CartItems({ quantity, name, mealPrice, foodId }) {
	const { removeItemFromCart, updateCartPriceRemove } = useContext(CartContext);

	const handleRemove = (event) => {
		event.preventDefault();
		removeItemFromCart(foodId);
		updateCartPriceRemove((mealPrice * quantity))

	};

	return (
		<div className="flex flex-row border-b-2 mx-2 relative py-1 mt-5">
			<div className="flex flex-row pl-2">
				<div className="rounded border-2 bg-slate-200 w-8 text-center">
					{quantity}
				</div>
				<div className="pl-4">{name}</div>
			</div>
			<form onSubmit={handleRemove}>
				<button className="absolute right-0 pr-2 rounded-md pl-2 pb-3 h-7 bg-slate-400 text-white">
					Remove
				</button>
			</form>

			<div className="absolute right-20 pr-2 ">£{mealPrice}</div>
		</div>
	);
}
