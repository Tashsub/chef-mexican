import React from "react";

export default function Meal(props) {
	return (
		<div className="h-20 w-full border-2 pl-5 bg-white font-sans">
			<h1 className="text-lg font-semibold text-black">{props.title}</h1>
			<div className="italic text-black">{props.ingredients}</div>
			<div className="font-medium text-red-600">£{props.price}</div>
		</div>
	);
}
