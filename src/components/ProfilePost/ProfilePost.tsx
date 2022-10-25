import React from "react";
import s from "./ProfilePost.module.scss";
import { AiFillHeart } from "react-icons/ai";

interface Props {
  post: ProfilePost;
}

function ProfilePost({ post }: Props) {
  const { img, likes, description } = post;

  return (
    <div className={s.profilepost}>
      <img src={img} alt={description} />
      <div className={s.likes}>
        <AiFillHeart size={25} />
        <h1>{likes}</h1>
      </div>
    </div>
  );
}

export default ProfilePost;
