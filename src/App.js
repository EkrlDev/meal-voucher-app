import React from "react";
import { useReducer, useState } from "react";
import AddMealItems from "./AddMealItems";
import MealItemList from "./MealItemList";
import { initialState, voucherReducer } from "./voucherReducer";
import "./styles.css";

const VoucherApp = () => {
  const [state, dispatch] = useReducer(voucherReducer, initialState);
  const [selectedMealList, setSelectedMealList] = useState({
    id: 0,
    Soup: "Taco Soup",
    MainCourse: "Steak",
    Salad: "Club Salad",
    Dessert: "Waffle",
    cost: 0,
  });

  const setFromList = (itemName, value) => {
    // setSelectedMealList((prevState) => {
    //   return { ...prevState, itemName: value };
    // });
    setSelectedMealList({
      ...selectedMealList,
      [itemName]: value,
    });
  };
  return (
    <div className="voucher">
      <h1>Meal-Voucher App</h1>
      <div className="listsContainer">
        <AddMealItems
          setFromList={setFromList}
          selectedMealList={selectedMealList}
          dispatch={dispatch}
        />
        <MealItemList dispatch={dispatch} state={state} />
      </div>
    </div>
  );
};

export default VoucherApp;
