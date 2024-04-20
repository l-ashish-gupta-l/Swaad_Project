import { createSlice } from "@reduxjs/toolkit";

const initialvalue = {
  User: {},
};

export const Userinfoslice = createSlice({
  name: "userinfo",
  initialState: initialvalue,
  reducers: {
    setuserInfo: (state, action) => {
      state.User = action.payload;
    },
  },
});

export const { setuserInfo } = Userinfoslice.actions;
export default Userinfoslice;
