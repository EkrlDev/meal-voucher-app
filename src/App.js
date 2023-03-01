import React from "react";
import { useReducer } from "react";
import AddMealItems from "./AddMealItems";
import MealItemList from "./MealItemList";
import { initialState, voucherReducer } from "./voucherReducer";
import "./styles.css";

const VoucherApp = () => {
  const [state, dispatch] = useReducer(voucherReducer, initialState);
  return (
    <div className="voucher">
      <h1>Meal-Voucher App</h1>
      <div className="listsContainer">
        <AddMealItems dispatch={dispatch} />
        <MealItemList />
      </div>
    </div>
  );
};

export default VoucherApp;
