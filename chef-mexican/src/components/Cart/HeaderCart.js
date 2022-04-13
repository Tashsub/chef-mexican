import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import ModalContext from "../../Context/ModalContext";
import CartContext from "../../Context/CartContext";

export default function HeaderCart() {
	
	const { showModal } = useContext(ModalContext);

	const { cart } = useContext(CartContext);

	let quantity = 0;

	for (let i = 0; i < cart.length; i++) {
		quantity += cart[i].quantity;
	}

	return (
		<>
			<div
				onClick={() => {
					showModal();
				}}
				className="hover:bg-slate-800 bg-red-700 text-white absolute flex right-24 h-14 px-5 border-rose-600 rounded-lg place-items-center space-x-2 "
			>
				<div className="">
					<FontAwesomeIcon icon={faCartShopping} className="fa-xl" />
				</div>
				<div className="font-semibold">View Cart</div>
				<div className="bg-red-500 w-8 h-8 rounded-full text-center font-semibold pt-1">
					<h1 className="">{quantity}</h1>
				</div>
			</div>
		</>
	);
}
