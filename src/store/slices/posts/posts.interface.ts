import { StateStatus } from "../../../common";

export interface PostsState {
  status: StateStatus;
  posts: FeedPost[];
}

export interface SetLikesPayload {
  id: string;
  amountOfLikes: number;
}

export interface ToggleClickAmountPayload {
  id: string;
}
