import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  counter: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    decrement: (state) => {
      state.counter -= 1;
    },
    increment: (state) => {
      state.counter += 1;
    },
    incrementFiveCustom: (state, action) => {
      state.counter += action.payload;
    },
    decrementFiveCustom: (state, action) => {
        state.counter -= action.payload;
      },
  },
});

export const { increment, decrement, incrementFiveCustom,decrementFiveCustom } = counterSlice.actions

export default counterSlice.reducer
