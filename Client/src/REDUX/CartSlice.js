import { createSlice } from "@reduxjs/toolkit";

const getCart_data = () => {
  const cart_data = localStorage.getItem("Cart_data");
  return cart_data ? JSON.parse(cart_data) : [];
};

const initialState = {
  Cart: getCart_data(),
};

const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      state.Cart.push(item);
    },
    removeFromCart: (state, action) => {
      state.Cart = state.Cart.filter((i) => i.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = CartSlice.actions;
export default CartSlice.reducer;
