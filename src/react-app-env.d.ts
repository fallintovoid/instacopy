/// <reference types="react-scripts" />

interface User {
    avi: PictureSizes;
    username: string;
}

interface PictureSizes {
    large: string;
    medium: string;
    thumbnail: string;
}

interface Post {
    img: string;
    avi: string;
    username: string;
    likes: number;
    description: string;
    id: string;
    liked: boolean;
}
