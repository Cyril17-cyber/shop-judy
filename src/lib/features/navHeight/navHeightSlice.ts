import { createSlice } from "@reduxjs/toolkit";

//nav slice
const initialState = {
  value: 0,
};

const navSlice = createSlice({
  //name of slice
  name: "navHeight",
  initialState,
  reducers: {
    setHeight: (state, action) => {
      state.value = action.payload;
    },
  },
});

//exporting our actions

export const { setHeight } = navSlice.actions;

export default navSlice.reducer;
