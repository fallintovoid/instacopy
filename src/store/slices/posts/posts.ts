import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserService } from "../../../lib/services/UserService/UserService";
import { PostsState } from "./posts.interface";
import { initialState as _adminState } from "../admin/admin";

const userService = new UserService(_adminState.amountOfUsersForRequest);

const initialState: PostsState = {
    status: 'idle',
    posts: []
}

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
