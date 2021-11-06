import {
  GET_CART,
  ADD_CART,
  DELETE_CART,
  INCREMENT_QTY,
  DECREMENT_QTY,
} from "./cart.type";

const initialState = {
  cart: [],
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case DELETE_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case GET_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case INCREMENT_QTY:
      return {
        ...state,
        cart: action.payload,
      };
    case DECREMENT_QTY:
      return {
        ...state,
        cart: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
export default CartReducer;
