import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserService } from "../../../lib/services/UserService/UserService";
import { PostsState } from "./posts.interface";

const userService = new UserService(5);

const initialState = {
    status: 'idle',
    posts: []
} as PostsState

export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async (users: User[]): Promise<Post[]> => {
        return await userService.getPosts(users)
    }
)

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getPosts.pending, (state: PostsState) => {
                state.status = 'idle'
            })
            .addCase(getPosts.rejected, (state: PostsState) => {
                state.status = 'error'
            })
            .addCase(getPosts.fulfilled, (state: PostsState, action: PayloadAction<Post[]>) => {
                state.posts = action.payload
                state.status = 'ok'
            })
    },
})

export default postsSlice.reducer
