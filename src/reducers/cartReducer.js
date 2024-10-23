export const initialState = {
  cartData: [],
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        cartData: [...state.cartData, action.payload],
      };
    case "REMOVE_FROM_CART":
      return {
        cartData: state.cartData.filter((movie) => movie.id !== action.payload),
      };

    default:
      return state;
  }
};
