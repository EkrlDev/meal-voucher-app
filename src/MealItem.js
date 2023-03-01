import React from "react";

const MealItem = () => {
  return (
    <li className="mealItem">
      <p>Meal1</p>
      <div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </li>
  );
};

export default MealItem;
