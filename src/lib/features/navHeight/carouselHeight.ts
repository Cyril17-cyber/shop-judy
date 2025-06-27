import { createSlice } from "@reduxjs/toolkit";

//nav slice
const initialState = {
  value: 0,
};

const carouselHeightSlice = createSlice({
  //name of slice
  name: "carouselHeight",
  initialState,
  reducers: {
    setCarouselHeight: (state, action) => {
      state.value = action.payload;
    },
  },
});

//exporting our actions

export const { setCarouselHeight } = carouselHeightSlice.actions;

export default carouselHeightSlice.reducer;
