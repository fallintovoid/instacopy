export interface ProfileState {
    username: string;
    description: string;
    subscribers: number;
    subscribed: number;
    profileAvi: string;
    posts: Post[];
}