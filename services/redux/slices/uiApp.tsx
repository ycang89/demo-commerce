import { RootState } from "@/services/redux/store";
import { createSelector, createSlice } from "@reduxjs/toolkit";
import { Country } from "@/declarations/store";
import { countries } from "@/configs/index";

export interface UiAppState {
  country: Country;
}

const initialState: UiAppState = {
  country: countries[1],
};

export const uiApp = createSlice({
  name: "uiApp",
  initialState,
  reducers: {
    setCountry: (state, action) => {
      state.country = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCountry } = uiApp.actions;

// State selector
const uiAppState = (state: RootState) => state.uiApp;
const country = createSelector(
  uiAppState,
  (uiApp: UiAppState) => uiApp.country
);

export const uiAppSelector = { country };

export default uiApp.reducer;
