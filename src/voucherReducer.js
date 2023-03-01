export const initialState = {
  id: 0,
  soup: "Make money",
  mainCourse: "Make money",
  salad: "Make money",
  dessert: "Make money",
  cost: 0,
};

export const voucherReducer = (state, action) => {
  switch (action.type) {
    case "order-meal": {
      console.log(action.payload);
      return;
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};
