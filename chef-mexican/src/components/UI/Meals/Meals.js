import React from "react";
import dataMeals from "../../../data/meals";
import Meal from "./Meal";

export default function Meals() {
	return (
		<div className="w-3/5 border-2 rounded-md">
			{dataMeals.map((meal) => (
				<Meal
					key={meal.id}
					identifier={meal.id}
					title={meal.title}
					ingredients={meal.ingredients}
					price={meal.price}
				/>
			))}
		</div>
	);
}
