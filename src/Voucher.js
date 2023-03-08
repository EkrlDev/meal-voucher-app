import React, { useContext } from "react";
import Switcher from "./Switcher";
import { useState } from "react";
import AddMealItems from "./AddMealItems";
import MealItemList from "./MealItemList";
import { tempContext } from "./tempContext";
import "./styles.css";

const Voucher = ({ dispatch, state, onHandle }) => {
  const tempCtx = useContext(tempContext);
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
    <div className={!tempCtx ? "voucher" : "voucher-dark"}>
      <h1>Meal-Voucher App</h1>
      <div className="tempSwitch">
        <Switcher onChange={onHandle} />
      </div>

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

export default Voucher;
