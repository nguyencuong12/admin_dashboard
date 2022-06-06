import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
// Define a type for the slice state
interface DrawerState {
  open: boolean;
}
// Define the initial state using that type
const initialState: DrawerState = {
  open: false,
};

export const drawerSlice = createSlice({
  name: "drawer",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    open: (state) => {
      state.open = true;
    },
    close: (state) => {
      state.open = false;
    },
    changeDrawerState: (state) => {
      state.open = !state.open;
    },
  },
});

export const { open, close, changeDrawerState } = drawerSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getOpenStatus = (state: RootState) => state.drawer.open;

export default drawerSlice.reducer;
