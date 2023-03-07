import React, { useContext } from "react";
import AddMealItem from "./AddMealItem";
import "./styles.css";
import { Menu } from "./MenuList";
import { tempContext } from "./tempContext";

const AddMealItems = ({ setFromList, selectedMealList, dispatch }) => {
  const tempCtx = useContext(tempContext);
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
    <div className={tempCtx ? "voucher-item" : "voucher-item-dark"}>
      <h2>Meal Items</h2>
      <ul>{addMealItemList}</ul>

      <div>
        <button onClick={submitHandler}>Order</button>
      </div>
    </div>
  );
};

export default AddMealItems;
