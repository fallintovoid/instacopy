import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import stories from './slices/stories';

export const store = configureStore({
  reducer: {
    stories,
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
