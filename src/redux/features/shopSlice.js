import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allItems: [],
  cartItems: [],
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    fetchData: (state, action) => {
      state.allItems = action.payload;
    },
    addItem: (state, action) => {
      const exists = state.cartItems.some((item) => item.id === action.payload);
      if (exists) return;
      let itemToBeAdded = state.allItems.find(
        (item) => item.id === action.payload
      );
      state.cartItems.push({ ...itemToBeAdded });
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const {fetchData, addItem, removeItem, clearCart} = shopSlice.actions;

export default shopSlice.reducer;
