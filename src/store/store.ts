import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import stories from './slices/stories/stories';
import posts from './slices/posts/posts';
import admin from './slices/admin/admin';

export const store = configureStore({
  reducer: {
    stories,
    posts,
    admin
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
