/// <reference types="react-scripts" />

interface User {
  avi: PictureSizes;
  username: string;
  id: string;
}

interface PictureSizes {
  large: string;
  medium: string;
  thumbnail: string;
}

interface FeedPost {
  img: string;
  avi: string;
  username: string;
  likes: number;
  description: string;
  id: string;
  liked: boolean;
}

interface ProfilePost extends FeedPost {
  blur_hash: string;
}

interface Storie {
  avi: PictureSizes;
  username: string;
  img: string;
  liked: boolean;
  id: string;
}
