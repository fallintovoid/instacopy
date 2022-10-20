import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { UserService } from '../../../lib/services/UserService/UserService';
import { StoriesState } from './stories.interface';
import { StateStatus } from '../../../common';

const userService = new UserService(5, 5)

export const fetchAvi = createAsyncThunk(
    'stories/fetchAvi',
    async (): Promise<User[]> => {
        return await userService.getInfoForStories()
    }
)

const initialState: StoriesState = { 
    stories: [],
    status: StateStatus.IDLE
}

const storiesSlice = createSlice({
  name: 'stories',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
        .addCase(fetchAvi.pending, (state) => {
            state.status = StateStatus.IDLE
        })
        .addCase(fetchAvi.rejected, (state) => {
            state.status = StateStatus.ERROR
        })
        .addCase(fetchAvi.fulfilled, (state, action: PayloadAction<User[]>) => {
            state.status = StateStatus.OK
            state.stories = action.payload
        })
  },
})

export default storiesSlice.reducer