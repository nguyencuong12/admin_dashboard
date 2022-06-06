import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
// Define a type for the slice state
interface authState {
  access_token: string;
}
// Define the initial state using that type
const initialState: authState = {
  access_token: localStorage.getItem("access_token")!,
};

export const authSlice = createSlice({
  name: "auth",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setAccessUser: (state, token) => {
      state.access_token = token.toString();
      localStorage.setItem("access_token", token.toString());
    },
  },
});

export const { setAccessUser } = authSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const getAuth = (state: RootState) => state.auth.access_token;

export default authSlice.reducer;
