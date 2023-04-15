import { createSlice } from "@reduxjs/toolkit";

const theme = createSlice({
  name: "theme",
  initialState: {
    fullScreen: false,
    colorMode: "dark",
  },
  reducers: {
    switchScreenSize(state, action) {
      state.fullScreen = action.payload;
    },
    switchColorMode(state, action) {
      state.colorMode = action.payload;
    },
  },
});

const { actions, reducer } = theme;
export const { switchColorMode, switchScreenSize } = actions;
export default reducer;
