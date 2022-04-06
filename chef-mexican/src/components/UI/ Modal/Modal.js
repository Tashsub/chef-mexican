import React from "react";
import ReactDOM from "react-dom";
import { useContext } from "react";
import ModalContext from "../../../Context/ModalContext";
import CartItems from "../../Cart/CartItems";

export default function Modal() {
	const buttonCss = "py-1 rounded-full w-20 h-10 mt-3 w-24 bg-red-700";

	const { hideModal, modalContent } = useContext(ModalContext);

	let cart = modalContent[0];

	let cartPrice = modalContent[1];

	return ReactDOM.createPortal(
		<div className="flex flex-col h-screen w-screen bg-black/50 place-content-center items-center absolute inset-0">
			<div className="w-3/6 h-96 border-2 border-slate-400 border-black rounded relative bg-white ">
				<div className="text-center font-semibold text-2xl py-2">Your Cart</div>
				<div className="border border-black h-44 mx-2 rounded-md overflow-y-scroll pt-2 text-center">
					{cart.length > 0 ? cart.map((meal) => (
						<CartItems
							key={meal.id}
							name={meal.title}
							price={meal.price}
							quantity={meal.quantity}
						/>
					)) : <p>Your cart is empty, try adding some food! </p>}
				</div>
				<div className="flex flex-row font-medium absolute bottom-20 pl-4 space-x-5 text-xl">
					<div>Total amount:</div>
					<div>£{cartPrice}</div>
				</div>
				<div className="bg-slate-200 w-full h-16 absolute bottom-0 flex place-content-center space-x-5 text-xl text-white">
					<button onClick={hideModal} className={buttonCss}>
						Close
					</button>
					<button className={buttonCss}>Order</button>
				</div>
			</div>
		</div>,
		document.getElementById("modal-root")
	);
}
