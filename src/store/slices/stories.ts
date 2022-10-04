import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface StoriesState {
  users: User[] | null;
  status: 'idle' | 'error' | 'ok'
}

export const fetchAvi = createAsyncThunk(
    'stories/fetchAvis',
    async (): Promise<string> => {
        try {
            const response = await fetch('https://i.pravatar.cc/150')
            const data = response.json()
            console.log(data)
            if (response.status < 200 || response.status >= 300) {
                throw new Error('Api thrown an error. Response status: ' + response.status)
            }
            
            return data
        } catch (error) {
            throw new Error('Something went wrong: ' + error)
        }
    }
)

const initialState = { 
    users: [],
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
        .addCase(fetchAvi.fulfilled, (state, action: PayloadAction<string>) => {
            state.status = 'idle'
            state.users?.push({avi: action.payload})
        })
  },
})

export const {} = storiesSlice.actions
export default storiesSlice.reducer