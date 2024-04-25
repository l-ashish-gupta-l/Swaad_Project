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
    addQTYtoItemInCart: (state, action) => {
      const dish = state.Cart.find((d) => d.id === action.payload.id);
      dish.Quantity = dish.Quantity + 1;
    },
    RemovetoItemInCart: (state, action) => {
      let dish = state.Cart.find((d) => d.id === action.payload.id);
      dish.Quantity = dish.Quantity - 1;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  addQTYtoItemInCart,
  RemovetoItemInCart,
} = CartSlice.actions;
export default CartSlice.reducer;
