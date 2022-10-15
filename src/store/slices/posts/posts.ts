import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserService } from "../../../lib/services/UserService/UserService";
import { PostsState, SetClickAmountPayload, SetLikesPayload } from "./posts.interface";
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
    reducers: {
        setLikes: (state, action: PayloadAction<SetLikesPayload>) => {
            state.posts.find((item: Post) => item.id === action.payload.id)!.likes += action.payload.amountOfLikes
        },
        setClickAmount: (state, action: PayloadAction<SetClickAmountPayload>) => {
            state.posts.find((item: Post) => item.id === action.payload.id)!.clickAmount = action.payload.clickAmount
        }
    },
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

export const {
    setLikes,
    setClickAmount
} = postsSlice.actions 
export default postsSlice.reducer
