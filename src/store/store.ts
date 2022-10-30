import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import users from "./slices/stories/users";
import posts from "./slices/posts/posts";
import profile from "./slices/profile/profile";

export const store = configureStore({
  reducer: {
    users,
    posts,
    profile,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
