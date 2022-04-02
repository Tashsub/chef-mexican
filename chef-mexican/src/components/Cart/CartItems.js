import React from "react";

export default function CartItems({ quantity, name, price }) {
	return (
		<div className="flex flex-row border-b-2 mx-2 relative py-1 mt-5">
			<div className="flex flex-row pl-2">
				<div className="rounded border-2 bg-slate-200 w-8 text-center">
					{quantity}
				</div>
				<div className="pl-4">{name}</div>
			</div>
			<div className="absolute right-0 pr-2">£{price}</div>
		</div>
	);
}
