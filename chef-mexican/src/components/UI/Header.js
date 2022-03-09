import React from "react";
import headerImage from "../../assets/bur3.jpg";
import HeaderCart from "../Cart/HeaderCart";
import Summary from "./Summary";

export default function Header() {
	return (
		<div className="flex flex-col bg-slate-700 h-5/6 pt-4">
			<div className="flex relative py-3 justify-center">
				<h1 className="uppercase text-6xl font-mono text-white">Chef Mexican</h1>
				<HeaderCart />
			</div>
			<div className="h-96 pt-3">
				<img
					className="object-cover w-full h-full skew-y-3"
					src={headerImage}
				/>
			</div>
            <div className="flex relative justify-center">
                <Summary />
            </div>
			
		</div>
	);
}
