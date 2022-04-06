import React, { useContext, useState } from "react";
import InputForMeal from "./InputForMeal";
import { BsFillPlusSquareFill } from "react-icons/bs";
import CartContext from "../../../Context/CartContext";

export default function ({identifier, mealInfo}) {

	const {addItemToCart,updateCartPrice} = useContext(CartContext);

	const [quantity, setQuantity] = useState(0);

	const {title, price} = mealInfo; 

	const objConfig = {
		id: identifier,
		type: "number",
		min: "1",
		max: "5",
		step: "1",
		className: "border-2 border-slate-800 rounded",
	};

	const meal = {
		id: identifier,
		title: title, 
		quantity: quantity, 
		price: price
	}

	const getInput=(input)=>{
		setQuantity(parseInt(input));
	}

	const handleButton=(e)=>{
		e.preventDefault();
		addItemToCart(meal);
		updateCartPrice(meal.price, meal.quantity);
	}

	return (
		<div>
			<form className="flex flex-row bg-slate-700 rounded-md p-2">
				<div className="">
					<InputForMeal label="Amount" input={objConfig} getInput={getInput} />
				</div>
				<div className="pl-1 mt-0.5">
					<button onClick={handleButton} className="bg-white rounded-md text-white">
						<BsFillPlusSquareFill size={22} color={"#B91C1B"} />
					</button>
				</div>
			</form>
		</div>
	);
}
