import React from "react";
import s from "./Post.module.scss";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { setLikes, toggleClickAmount } from "../../store/slices/posts/posts";
import { useAppDispatch } from "../../lib/hooks/hooks";

const Post = ({ username, avi, img, likes, description, id, liked }: Post) => {
  const dispatch = useAppDispatch();

  const onLikeHandler = (idPost: string) => {
    if (!liked) {
      dispatch(
        setLikes({
          id: idPost,
          amountOfLikes: 1,
        })
      );
      dispatch(
        toggleClickAmount({
          id: idPost,
        })
      );
    } else {
      dispatch(
        setLikes({
          id: idPost,
          amountOfLikes: -1,
        })
      );
      dispatch(
        toggleClickAmount({
          id: idPost,
        })
      );
    }
  };

  const likeButton = liked ? (
    <AiFillHeart onClick={() => onLikeHandler(id)} className={s.likebutton} size="40" />
  ) : (
    <AiOutlineHeart onClick={() => onLikeHandler(id)} className={s.likebutton} size="40" />
  );

  return (
    <div className={s.post}>
      <div className={s.user}>
        <div className={s.avi}>
          <img src={avi} alt={avi} />
        </div>
        <p>{username}</p>
      </div>
      <img className={s.image} src={img} alt={img} />
      <div className={s.info}>
        <div className={s.menu}>{likeButton}</div>
        <p>{likes} Likes</p>
        <p className={s.description}>{description ? description : null}</p>
      </div>
    </div>
  );
};

export default Post;
