import React from "react";

export default function Summary() {
	return (
		<div className="h-60 w-3/6 text-center drop-shadow-xl bg-slate-800 text-white py-2 rounded-md absolute -top-12">
			<div>
				<h1 className="text-3xl">We're open for dine-in!</h1>
				<br />
				<p>
					Come and enjoy the best food served with some of our iconic drinks.
				</p>
				<br />
				<p>Our opening times:</p>

				<li>Monday - Thursday: 12pm - 9pm</li>
				<li>Friday - Saturday: 11.30am - 10pm</li>
				<li>Sunday: 11.30am - 9pm</li>
			</div>
		</div>
	);
}
