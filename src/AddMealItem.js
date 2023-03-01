import React from "react";
import "./styles.css";

const AddMealItem = ({ title, menu }) => {
  const mealItemOptionList = menu[title].map((t) => t.name);
  const mealItemOptions = mealItemOptionList.map((item) => {
    return (
      <option key={item} value={item}>
        {item}
      </option>
    );
  });

  return (
    <div className="mealItem">
      <label>{title}</label>
      <select className="select-option">{mealItemOptions}</select>
    </div>
  );
};

export default AddMealItem;
