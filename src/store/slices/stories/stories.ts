import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { UserService } from '../../../lib/services/UserService/UserService';
import { StoriesState } from './stories.interface';
import { initialState as _adminState } from "../admin/admin";

const userService = new UserService(_adminState.amountOfUsersForRequest)

export const fetchAvi = createAsyncThunk(
    'stories/fetchAvi',
    async (): Promise<User[]> => {
        return await userService.getInfoForStories()
    }
)

const initialState: StoriesState = { 
    stories: [],
    status: 'idle'
}

const storiesSlice = createSlice({
  name: 'stories',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
        .addCase(fetchAvi.pending, (state) => {
            state.status = 'idle'
        })
        .addCase(fetchAvi.rejected, (state) => {
            state.status = 'error'
        })
        .addCase(fetchAvi.fulfilled, (state, action: PayloadAction<User[]>) => {
            state.status = 'ok'
            state.stories = action.payload
        })
  },
})

export const {} = storiesSlice.actions
export default storiesSlice.reducer