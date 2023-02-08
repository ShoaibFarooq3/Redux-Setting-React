import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Products from "./Products";
import "../src/App.css";
function App() {
  return (
    <Provider store={store}>
      <Products />
    </Provider>
  );
}

export default App;
