import { configureStore } from "@reduxjs/toolkit";
import Userinfoslice from "./UserSlice";
import CartSlice from "./CartSlice";

export const store = configureStore({
  reducer: {
    userinfo: Userinfoslice,
    Cart: CartSlice,
  },
});
