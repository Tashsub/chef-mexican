import React from "react";
import headerImage from "../../assets/bur2.jpg";

export default function Header() {
	return (
		<React.Fragment>
			<div className="flex relative py-3">
				<h1 className="pl-3">Chef Mexican</h1>
				<button className="border-2 px-10 border-rose-600 rounded-lg absolute right-72">
					Cart
				</button>
			</div>
			<div className="">
				<img src={headerImage} />
			</div>
		</React.Fragment>
	);
}
