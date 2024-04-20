import { configureStore } from "@reduxjs/toolkit";
import Userinfoslice from "./UserSlice";

export const store = configureStore({
  reducer: Userinfoslice.reducer,
});
