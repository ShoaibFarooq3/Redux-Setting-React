import { combineReducers } from "redux";
import initialState from "./initialState";

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_SUCCESS":
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  products: productsReducer,
});

export default rootReducer;
