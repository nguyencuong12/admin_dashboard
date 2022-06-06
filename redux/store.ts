import { configureStore } from "@reduxjs/toolkit";
import drawerSlice from "./slice/drawer/drawerSlice";
import authSlice from "./slice/authenticated/authSlice";
export const store = configureStore({
  reducer: {
    drawer: drawerSlice,
    // auth: authSlice,
  },
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
