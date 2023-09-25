import { configureStore } from "@reduxjs/toolkit";
import authUserSlice from "./Slices/authUserSlice";
import expenseSlice from "./Slices/expenseSlice";

const store = configureStore({
  reducer: {
    user: authUserSlice,
    expenses: expenseSlice,
  },
});

export default store;
