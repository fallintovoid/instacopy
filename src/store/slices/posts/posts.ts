import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserService } from "../../../lib/services/UserService/UserService";
import { PostsState, ToggleClickAmountPayload, SetLikesPayload } from "./posts.interface";
import { StateStatus } from "../../../common";

const userService = new UserService(5, 5);

const initialState: PostsState = {
  status: StateStatus.IDLE,
  posts: [],
};

export const getPosts = createAsyncThunk("posts/getPosts", async (users: User[]): Promise<Post[]> => {
  return userService.getPosts(users);
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setLikes: (state, action: PayloadAction<SetLikesPayload>) => {
      state.posts.find((item: Post) => item.id === action.payload.id)!.likes += action.payload.amountOfLikes;
    },
    toggleClickAmount: (state, action: PayloadAction<ToggleClickAmountPayload>) => {
      const currentPost = state.posts.find((item: Post) => item.id === action.payload.id);
      currentPost!.liked = !currentPost!.liked;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getPosts.pending, (state: PostsState) => {
        state.status = StateStatus.IDLE;
      })
      .addCase(getPosts.rejected, (state: PostsState) => {
        state.status = StateStatus.ERROR;
      })
      .addCase(getPosts.fulfilled, (state: PostsState, action: PayloadAction<Post[]>) => {
        state.posts = action.payload;
        state.status = StateStatus.OK;
      });
  },
});

export const { setLikes, toggleClickAmount } = postsSlice.actions;
export default postsSlice.reducer;
