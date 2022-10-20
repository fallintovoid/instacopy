import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserService } from "../../../lib/services/UserService/UserService";
import { ProfileState, SetSettingsPayload } from "./profile.interface";
import { getRandomNumber } from "../../../lib/funcs/getRandomNumber";

enum StateStatus {
    IDLE = 'idle',
    ERROR = 'error',
    OK = 'ok'
}

const userService = new UserService(5, 5)

export const getPhotoForProfile = createAsyncThunk(
    'profile/getPhotoForProfile',
    async () => {
        const photoUrl = await userService.getRandomPhoto()

        return photoUrl
    }
)

const initialState: ProfileState = {
    username: 'fellintovoid',
    description: 'develop yourself',
    profileAvi: '',
    subscribed: getRandomNumber(0, 1000),
    subscribers: getRandomNumber(0, 1000),
    posts: [],
    status: StateStatus.IDLE,
    photoStatus: StateStatus.IDLE
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
        },
        setSettings: (state, action: PayloadAction<SetSettingsPayload>) => {
            state.description = action.payload.description
            state.profileAvi = action.payload.profileAvi
            state.username = action.payload.username
        }
    },
    extraReducers(builder) {
        builder 
            .addCase(getPostsForProfile.pending, (state) => {
                state.status = StateStatus.IDLE
            })
            .addCase(getPostsForProfile.rejected, (state) => {
                state.status = StateStatus.ERROR
            })
            .addCase(getPostsForProfile.fulfilled, (state, action: PayloadAction<Post[]>) => {
                state.status = StateStatus.OK
                state.posts = action.payload
            })
            .addCase(getPhotoForProfile.pending, (state) => {
                state.photoStatus = StateStatus.IDLE
            })
            .addCase(getPhotoForProfile.rejected, (state) => {
                state.photoStatus = StateStatus.ERROR
            })
            .addCase(getPhotoForProfile.fulfilled, (state, action: PayloadAction<string>) => {
                state.photoStatus = StateStatus.OK
                state.profileAvi = action.payload
            })
    },
})

export const {
    setSubscribed, 
    setSubscribers,
    setSettings
} = profileSlice.actions
export default profileSlice.reducer