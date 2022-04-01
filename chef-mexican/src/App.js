import Header from "./components/UI/Header";
import Meals from "./components/UI/Meals/Meals";
import Modal from "./components/UI/ Modal/Modal";
import { useState } from "react";
function App() {
	const [bool, setBool] = useState(false);
	const click = () => {
		console.log("clicked");
		setBool(true);
	};

	//const modal

	return (
		<div className="flex flex-col bg-slate-700 h-screen pb-10">
			<Header></Header>
			<div className="flex static justify-center pt-60">
				<Meals></Meals>
			</div>
			<div className="pt-80%">
				<button onClick={click}>CLICK</button>
			</div>
			{bool && (
				<div className="w-full h-full bg-slate-100/50 fixed overflow-auto flex place-content-center items-center">
					<div className="w-3/6 h-80 border-2 border-slate-400 border-black rounded relative bg-white ">
						<div className="text-center font-semibold text-2xl pt-2">
							Your Cart
						</div>
						<div className="flex flex-row border-b-2 mx-2 relative py-1">
							<div className="flex flex-row pl-2">
								<div className="rounded border-2 bg-slate-200 w-8 text-center">3</div>
								<div className="pl-4">name</div>
							</div>
							<div className="absolute right-0 pr-2">
								£13.99
							</div>
						</div>
						<div className="flex flex-row font-medium absolute bottom-20 pl-4 space-x-5 text-xl">
							<div>Total amount:</div>
							<div>£43.99</div>
						</div>
						<div className="bg-slate-200 w-full h-16 absolute bottom-0 flex place-content-center space-x-5 text-xl text-white">
							<button className="py-1 rounded-full w-20 h-10 mt-3 w-24 bg-red-700">
								Close
							</button>
							<button className="py-1 rounded-full w-20 h-10 mt-3 w-24 bg-red-700">
								Order
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default App;
