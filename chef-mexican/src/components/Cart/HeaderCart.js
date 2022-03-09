import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function HeaderCart() {
	return (
		<div className="bg-red-700 text-white absolute flex right-24 h-14 px-5 border-rose-600 rounded-lg place-items-center space-x-2 ">
			<div className="">
				<FontAwesomeIcon icon={faCartShopping} className="fa-xl" />
			</div>
			<button className="font-semibold">Your cart</button>

			<div className="bg-red-500 w-8 h-8 rounded-full text-center font-semibold pt-1">
				<h1 className="">4</h1>
			</div>
		</div>
	);
}
