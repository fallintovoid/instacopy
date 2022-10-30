import React from "react";
import { useAppSelector } from "../../lib/hooks/hooks";
import Post from "../Post/Post";
import SkeltonPost from "../SkeletonPost/SkeltonPost";
import { StateStatus } from "../../common";
import { v4 } from "uuid";

import s from "./PostList.module.scss";

const PostList = () => {
  const { posts, status } = useAppSelector((state) => state.posts);

  const renderPostList = (posts: Post[]) => {
    return posts.map((post: Post) => {
      return (
        <Post
          avi={post.avi}
          username={post.username}
          img={post.img}
          likes={post.likes}
          description={post.description}
          key={v4()}
          id={post.id}
          liked={post.liked}
        />
      );
    });
  };

  return (
    <div className={s.postlist}>
      {status === StateStatus.OK && renderPostList(posts)}
      {status === StateStatus.IDLE && <SkeltonPost />}
    </div>
  );
};

export default PostList;
