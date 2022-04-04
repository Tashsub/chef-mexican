import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import ModalContext from "../../Context/ModalContext";
import CartContext from "../../Context/CartContext";

export default function HeaderCart() {

	const { showModal } = useContext(ModalContext);
	const {cart, quantity } = useContext(CartContext);

	const numOfItemsInCart = cart.length; 

	return (
		<>
			<div className="bg-red-700 text-white absolute flex right-24 h-14 px-5 border-rose-600 rounded-lg place-items-center space-x-2 ">
				<div className="">
					<FontAwesomeIcon icon={faCartShopping} className="fa-xl" />
				</div>
				<button
					onClick={() => {
						showModal();
					}}
					className="font-semibold"
				>
					View Cart
				</button>
				<div className="bg-red-500 w-8 h-8 rounded-full text-center font-semibold pt-1">
					<h1 className="">{quantity}</h1>
				</div>
			</div>
		</>
	);
}
