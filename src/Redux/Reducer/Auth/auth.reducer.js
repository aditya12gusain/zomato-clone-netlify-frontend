import { SIGN_IN, SIGN_UP } from "./auth.type";

const initialState = {};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
      };
    case SIGN_UP:
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};
export default AuthReducer;
