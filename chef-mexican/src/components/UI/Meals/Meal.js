import React from "react";
import MealForm from "../Forms/MealForm";

export default function Meal(props) {
	return (
		<div className="flex flex-row h-20 w-full border-2 pl-5 bg-white font-sans relative">
			<div>
				<h1 className="text-lg font-semibold text-black">{props.title}</h1>
				<div className="italic text-black">{props.ingredients}</div>
				<div className="font-medium text-red-600">£{props.price}</div>
			</div>
			<div></div>
			<div className="absolute right-8 pt-4 ">
				<MealForm />
			</div>
		</div>
	);
}
