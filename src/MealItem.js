import React from "react";

const MealItem = ({ title, dispatch }) => {
  const deleteItemHandler = () => {
    dispatch({
      type: "delete-meal",
      title: title,
    });
  };
  const newMeal = (
    <li className="mealItem">
      {title}
      <div>
        <button>Edit</button>
        <button onClick={deleteItemHandler}>Delete</button>
      </div>
    </li>
  );
  return <div>{newMeal}</div>;
};

export default MealItem;
