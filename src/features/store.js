import { configureStore } from "@reduxjs/toolkit";
import sumTotalReducer from "./counterSlice";
import todoReducer from "./todoSlice";

export const store = configureStore({
  reducer: {
    sumTotal: sumTotalReducer,
    todoApp: todoReducer
  },
});
