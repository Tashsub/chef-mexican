import React from "react";

export default function InputForMeal({ input, label, getInput}) {
	const handleChange=(e)=>{
		e.preventDefault();
		getInput(e.target.value); 
	}
	
	return (
		<div >
			<label className="text-white" htmlFor={input.id}> {label}: </label>
			<input  {...input} onChange={handleChange}/>
		</div>
	);
}
