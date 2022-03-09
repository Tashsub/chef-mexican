import React from "react";
import headerImage from "../../assets/bur3.jpg";
import HeaderCart from "../Cart/HeaderCart";

export default function Header() {
	return (
		<div className="bg-slate-400 h-56">
			<div className="flex relative py-3 justify-center">
				<h1 className="uppercase text-6xl font-mono">Chef Mexican</h1>
				<HeaderCart/>
			</div>
			<div className="h-96 pt-3">
				<img className="object-cover w-full h-full skew-y-3" src={headerImage} />
			</div>
		</div>
	);
}
