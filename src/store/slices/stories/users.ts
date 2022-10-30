import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { UserService } from "../../../lib/services/UserService/UserService";
import { UsersState } from "./users.interface";
import { StateStatus } from "../../../common";

const userService = new UserService(5, 5);

export const getUsersInfo = createAsyncThunk("users/getUsersInfo", (): Promise<User[]> => {
  return userService.getUsersInfo();
});

const initialState: UsersState = {
  users: [],
  status: StateStatus.IDLE,
  currentStoriesIndex: 0,
};

const usersSlice = createSlice({
  name: "stories",
  initialState,
  reducers: {
    setCurrentStoriesIndex: (state, action: PayloadAction<number>) => {
      state.currentStoriesIndex = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getUsersInfo.pending, (state) => {
        state.status = StateStatus.IDLE;
      })
      .addCase(getUsersInfo.rejected, (state) => {
        state.status = StateStatus.ERROR;
      })
      .addCase(getUsersInfo.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.status = StateStatus.OK;
        state.users = action.payload;
      });
  },
});

export const { setCurrentStoriesIndex } = usersSlice.actions;
export default usersSlice.reducer;
