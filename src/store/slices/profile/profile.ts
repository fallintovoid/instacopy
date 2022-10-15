import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserService } from "../../../lib/services/UserService/UserService";
import { initialState as _adminState } from "../admin/admin";
import { ProfileState } from "./profile.interface";
import { getRandomNumber } from "../../../lib/funcs/useRandomNumber";


const userService = new UserService(_adminState.amountOfUsersForRequest)

const initialState: ProfileState = {
    username: 'fellintovoid',
    description: 'develop yourself',
    profileAvi: 'https://images.unsplash.com/photo-1612018941629-71e929b5403f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    subscribed: getRandomNumber(0, 1000),
    subscribers: getRandomNumber(0, 1000),
    posts: [],
    status: 'idle'
}

export const getPostsForProfile = createAsyncThunk(
    'profile/getPostsForProfile',
    async (): Promise<Post[]> => {
        return userService.getPostsForProfile(initialState.username, initialState.profileAvi)
    }
)

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setSubscribed: (state, action: PayloadAction<number>) => {
            state.subscribed = action.payload
        },
        setSubscribers: (state, action: PayloadAction<number>) => {
            state.subscribers = action.payload
        }
    },
    extraReducers(builder) {
        builder 
            .addCase(getPostsForProfile.pending, (state) => {
                state.status = 'idle'
            })
            .addCase(getPostsForProfile.rejected, (state) => {
                state.status = 'error'
            })
            .addCase(getPostsForProfile.fulfilled, (state, action: PayloadAction<Post[]>) => {
                state.status = 'ok'
                state.posts = action.payload
            })
    },
})

export const {
    setSubscribed, 
    setSubscribers
} = profileSlice.actions
export default profileSlice.reducer