import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
};

export const getProduct = createAsyncThunk("getProduct", async () => {
  const { data } = await axios.get("https://fakestoreapi.com/products");
  return data;
}); // promies değer dönecektir

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export default productSlice.reducer;
