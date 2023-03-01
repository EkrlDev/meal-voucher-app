import React from "react";
import AddMealItem from "./AddMealItem";
import "./styles.css";
import { Menu } from "./MenuList";

const AddMealItems = () => {
  const MealItemTitles = Object.keys(Menu);
  const addMealItemList = MealItemTitles.map((meal) => {
    return (
      <li key={meal}>
        <AddMealItem title={meal} menu={Menu} />
      </li>
    );
  });
  return (
    <div className="voucher-item">
      <h2>Meal Items</h2>
      <ul>{addMealItemList}</ul>

      <div>
        <button>Order</button>
      </div>
    </div>
  );
};

export default AddMealItems;
