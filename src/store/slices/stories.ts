import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { UserService } from '../../lib/services/UserService/UserService';

interface StoriesState {
  stories: Story[] | null;
  status: 'idle' | 'error' | 'ok'
}

const userService = new UserService()

export const fetchAvi = createAsyncThunk(
    'stories/fetchAvi',
    async (amount: number): Promise<Story[]> => {
        return await userService.getInfoForStories(amount)
    }
)

const initialState = { 
    stories: [],
    status: 'idle'
} as StoriesState

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
        .addCase(fetchAvi.fulfilled, (state, action: PayloadAction<Story[]>) => {
            state.status = 'ok'
            action.payload.forEach((item: Story): void => {
                state.stories?.push({avi: item.avi, username: item.username})
            })
        })
  },
})

export const {} = storiesSlice.actions
export default storiesSlice.reducer