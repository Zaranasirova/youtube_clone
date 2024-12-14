import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IconState {}

const initialState: IconState = {};

export const iconSlice = createSlice({
  name: "icon",
  initialState,
  reducers: {
    
  },
});

// Action creators are generated for each case reducer function
export const {} = iconSlice.actions;

export default iconSlice.reducer;
