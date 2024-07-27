import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  specialInstructions: "",
  roomNumber: "",
  isOrderPlace: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCartReducer: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find((i) => i.name === item.name);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }
    },
    removeFromCartReducer: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find((i) => i.name === item.name);
      if (existingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter((i) => i.name !== item.name);
      } else {
        existingItem.quantity -= 1;
      }
    },
    setOtherFieldsReducer: (state, action) => {
      const [key, value] = action.payload;
      state[key] = value;
    },
  },
});

export const {
  addToCartReducer,
  removeFromCartReducer,
  setOtherFieldsReducer,
} = cartSlice.actions;

export default cartSlice.reducer;
