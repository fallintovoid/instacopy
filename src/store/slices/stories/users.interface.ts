import { StateStatus } from "../../../common";

export interface UsersState {
  users: User[];
  status: StateStatus;
  currentStoriesIndex: number;
}
