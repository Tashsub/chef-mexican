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

	return (
		<div className="flex flex-col bg-slate-700 h-screen pb-10">
			<Header></Header>
			<div className="flex static justify-center pt-60">
				<Meals></Meals>
			</div>
			<div className="pt-80%">
				<button onClick={click}>CLICK</button>
			</div>
			{bool && <Modal />}
		</div>
	);
}

export default App;
