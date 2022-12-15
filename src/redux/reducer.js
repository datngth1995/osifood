const defaultState = {
  cart: [],
};
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT_TO_CART':
      state.cart.push(action.payload);
      return { ...state };
    default:
      return { ...state };
  }
};
export default reducer;
