export interface PostsState {
    status: 'idle' | 'error' | 'ok';
    posts: Post[];
}