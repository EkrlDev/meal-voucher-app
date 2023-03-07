import React, { useContext } from "react";
import MealItem from "./MealItem";
import { tempContext } from "./tempContext";

const MealItemList = ({ state, dispatch }) => {
  const tempCtx = useContext(tempContext);
  return (
    <div className={tempCtx ? "voucher-item" : "voucher-item-dark"}>
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
