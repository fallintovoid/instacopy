import { StateStatus } from "../../../common";

export interface PostsState {
  status: StateStatus;
  posts: Post[];
  page: number;
  fetching: boolean;
}

export interface SetLikesPayload {
  id: string;
  amountOfLikes: number;
}

export interface ToggleClickAmountPayload {
  id: string;
}
