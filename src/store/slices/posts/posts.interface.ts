export interface PostsState {
    status: 'idle' | 'error' | 'ok';
    posts: Post[];
}

export interface SetLikesPayload {
    id: string;
    amountOfLikes: number;
}

export interface SetClickAmountPayload {
    id: string;
    clickAmount: number;
}