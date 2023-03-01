import React from "react";
import MealItem from "./MealItem";

const MealItemList = () => {
  return (
    <div className="voucher-item">
      <h2>Ordered Meal</h2>
      <ul>
        <MealItem />
      </ul>
      <h6>Your Order has received.</h6>
      <div className="voucher-item">
        <p>Your Order ID: xxxxxx</p>
        <p>Cost: xxxxxx</p>
      </div>
    </div>
  );
};

export default MealItemList;
