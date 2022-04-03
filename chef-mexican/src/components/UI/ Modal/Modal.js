import React from "react";
import ReactDOM from "react-dom";
import { useContext } from "react";
import ModalContext from "../../../Context/ModalContext";

export default function Modal({ children }) {
	const buttonCss = "py-1 rounded-full w-20 h-10 mt-3 w-24 bg-red-700";
	const { hideModal } = useContext(ModalContext);

	return ReactDOM.createPortal(
		<div className="flex flex-col h-screen w-screen bg-slate-100/50 place-content-center items-center absolute inset-0 ">
			<div className="w-3/6 h-80 border-2 border-slate-400 border-black rounded relative bg-white ">
				<div className="text-center font-semibold text-2xl pt-2">Your Cart</div>
				{children}
				<div className="flex flex-row font-medium absolute bottom-20 pl-4 space-x-5 text-xl">
					<div>Total amount:</div>
					<div>£43.99</div>
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
