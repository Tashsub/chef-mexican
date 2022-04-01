import React from "react";

export default function InputForMeal({ input, label }) {
	return (
		<div >
			<label className="text-white" htmlFor={input.id}> {label}: </label>
			<input  {...input} />
		</div>
	);
}
