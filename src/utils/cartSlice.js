import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },

  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    clearCart: (state, action) => {
      return { items: [] };
    },
  },
});

export const { addItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
