import { createSlice } from "@reduxjs/toolkit";
import { ProfileState } from "./profile.interface";

const initialState = {
    username: 'fellintovoid',
    description: 'zhmich) karayu)',
    profileAvi: 'https://images.unsplash.com/photo-1612018941629-71e929b5403f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    subscribed: 0,
    subscribers: 0,
    posts: []
} as ProfileState

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {}
})

export default profileSlice.reducer