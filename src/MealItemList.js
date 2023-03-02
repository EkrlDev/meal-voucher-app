import React from "react";
import MealItem from "./MealItem";

const MealItemList = ({ state, dispatch }) => {
  return (
    <div className="voucher-item">
      <h2>Ordered Meal</h2>
      <ul>
        <MealItem dispatch={dispatch} title={state.selectedMeal.Soup} />
        <MealItem dispatch={dispatch} title={state.selectedMeal.MainCourse} />
        <MealItem dispatch={dispatch} title={state.selectedMeal.Salad} />
        <MealItem dispatch={dispatch} title={state.selectedMeal.Dessert} />
      </ul>
      <h6>Your Order has received.</h6>
      <div>
        <p>Your Order ID: {state.id}</p>
        <p>Cost: {state.cost}</p>
      </div>
    </div>
  );
};

export default MealItemList;
