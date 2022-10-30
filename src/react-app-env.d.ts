/// <reference types="react-scripts" />

interface User {
  avi: string;
  username: string;
  id: string;
  story: string;
  liked: boolean;
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
