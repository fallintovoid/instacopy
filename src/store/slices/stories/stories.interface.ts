import { StateStatus } from "../../../common";

export interface StoriesState {
  stories: User[] | null;
  status: StateStatus;
}
