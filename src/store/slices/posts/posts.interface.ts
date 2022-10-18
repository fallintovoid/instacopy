export interface PostsState {
    status: 'idle' | 'error' | 'ok';
    posts: Post[];
}

export interface SetLikesPayload {
    id: string;
    amountOfLikes: number;
}

export interface ToggleClickAmountPayload {
    id: string;
}