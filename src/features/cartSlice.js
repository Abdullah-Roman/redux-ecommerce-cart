import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: [],
  },
  reducers: {
    add: (state, action) => {
      const existingIndex = state.value.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingIndex >= 0) {
        state.value[existingIndex].quantity += 1;
      } else {
        state.value.push({ ...action.payload, quantity: 1 });
      }
    },
    remove: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
