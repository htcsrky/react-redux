import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import productSlice from "../features/product/productSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productSlice,
  },
});
