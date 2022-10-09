import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import stories from './slices/stories/stories';
import posts from './slices/posts/posts';

export const store = configureStore({
  reducer: {
    stories,
    posts
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
