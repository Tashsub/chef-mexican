import React from "react";
import InputForMeal from "./InputForMeal";
import { BsFillPlusSquareFill } from "react-icons/bs";

export default function ({identifier}) {
	const objConfig = {
		id: identifier,
		type: "number",
		min: "1",
		max: "5",
		step: "1",
		className: "border-2 border-slate-800 rounded ",
	};
	return (
		<div>
			<form className="flex flex-row bg-slate-700 rounded-md p-2">
				<div className="">
					<InputForMeal label="Amount" input={objConfig} />
				</div>
				<div className="pl-1 mt-0.5">
					<button className="bg-white rounded-md text-white">
						<BsFillPlusSquareFill size={22} color={"#B91C1B"} />
					</button>
				</div>
			</form>
		</div>
	);
}
