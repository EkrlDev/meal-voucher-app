import React from "react";
import AddMealItem from "./AddMealItem";
import "./styles.css";
import { Menu } from "./MenuList";

const AddMealItems = ({ setFromList, selectedMealList, dispatch }) => {
  const MealItemTitles = Object.keys(Menu);
  const addMealItemList = MealItemTitles.map((meal) => {
    return (
      <li key={meal}>
        <AddMealItem title={meal} menu={Menu} setFromList={setFromList} />
      </li>
    );
  });
  const submitHandler = () => {
    dispatch({
      type: "order-meal",
      id: new Date().getTime().toString(),
      meal: {
        Soup: selectedMealList.Soup,
        MainCourse: selectedMealList.MainCourse,
        Salad: selectedMealList.Salad,
        Dessert: selectedMealList.Dessert,
      },
    });
  };
  return (
    <div className="voucher-item">
      <h2>Meal Items</h2>
      <ul>{addMealItemList}</ul>

      <div>
        <button onClick={submitHandler}>Order</button>
      </div>
    </div>
  );
};

export default AddMealItems;
