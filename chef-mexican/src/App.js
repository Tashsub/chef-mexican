import Header from "./components/UI/Header";
import Meals from "./components/UI/Meals/Meals";

function App() {
	return (
		<div className="flex flex-col bg-slate-700 h-screen pb-10">
			<Header></Header>
			<div className="flex static justify-center pt-60">
				<Meals></Meals>
			</div>
			
		</div>
	);
}

export default App;
