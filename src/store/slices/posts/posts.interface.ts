import { StateStatus } from "../../../common";

export interface PostsState {
  status: StateStatus;
  posts: Post[];
}

export interface SetLikesPayload {
  id: string;
  amountOfLikes: number;
}

export interface ToggleClickAmountPayload {
  id: string;
}
