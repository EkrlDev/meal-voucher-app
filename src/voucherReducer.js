export const initialState = {
  id: "0",
  selectedMeal: {
    Soup: "Taco Soup",
    MainCourse: "Steak",
    Salad: "Club Salad",
    Dessert: "Waffle",
  },
};

export const voucherReducer = (state, action) => {
  switch (action.type) {
    case "order-meal": {
      return {
        ...state,
        id: action.id,
        selectedMeal: action.meal,
      };
    }
    case "delete-meal": {
      for (const key in state.selectedMeal) {
        if (
          state.selectedMeal.hasOwnProperty(key) &&
          state.selectedMeal[key] === action.title
        ) {
          return {
            ...state,
            selectedMeal: {
              ...state.selectedMeal,
              [key]: `${key} not selected`,
            },
          };
        }
      }
      break;
    }

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};
