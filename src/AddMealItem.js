import React from "react";
import "./styles.css";

const AddMealItem = ({ title, menu, setFromList }) => {
  const mealItemOptionList = menu[title].map((t) => t.name);
  const mealItemOptions = mealItemOptionList.map((item) => {
    return (
      <option key={item} value={item}>
        {item}
      </option>
    );
  });
  const onChangeHandler = (e) => {
    setFromList(title, e.target.value);
  };
  return (
    <div className="mealItem">
      <label>{title}</label>
      <select className="select-option" onChange={onChangeHandler}>
        {mealItemOptions}
      </select>
    </div>
  );
};

export default AddMealItem;
