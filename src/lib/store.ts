//This file handles all the state in the code
import { configureStore } from "@reduxjs/toolkit";
import carouselHeightSlice from "./features/navHeight/carouselHeight";
import navSlice from "./features/navHeight/navHeightSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      navHeight: navSlice,
      carouselHeight: carouselHeightSlice,
    },
  });
};

//we will be importing this in whatever file that's rendering our app.
