import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cartSlice";
import dataSlice from "../features/dataSlice";

const store = configureStore({
  reducer: {
    data: dataSlice,
    cart: cartSlice,
  },
});

export default store;
