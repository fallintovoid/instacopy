export interface ProfileState {
    username: string;
    description: string;
    subscribers: number;
    subscribed: number;
    profileAvi: string;
    posts: Post[];
    status: 'idle' | 'error' | 'ok'
}

export interface GetPostsPayload {
    username: string;
    avi: string;
}

export interface SetSettingsPayload {
    username: string;
    profileAvi: string;
    description: string;
}