import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LocationState {
  city: string | null;
  state: string | null;
  country: string | null
  error: string | null;
}

const initialState: LocationState = {
  city: null,
  state: null,
  country: null,
  error: null,
};

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocation: (
      state,
      action: PayloadAction<{ city: string; state: string; country: string }>
    ) => {
      state.city = action.payload.city;
      state.state = action.payload.state;
      state.country = action.payload.country;
      state.error = null;
    },
    setLocationError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const { setLocation, setLocationError } = locationSlice.actions;
export default locationSlice.reducer;
