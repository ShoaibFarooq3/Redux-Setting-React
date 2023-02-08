// actions.js
import axios from "axios";

export const fetchProductsSuccess = (products) => ({
  type: "FETCH_PRODUCTS_SUCCESS",
  payload: products,
});

export const fetchProducts = () => {
  return (dispatch) => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        // console.log(response);
        dispatch(fetchProductsSuccess(response.data));
      })
      .catch((error) => {
        throw error;
      });
  };
};
