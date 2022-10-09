export interface StoriesState {
    stories: User[] | null;
    status: 'idle' | 'error' | 'ok'
  }