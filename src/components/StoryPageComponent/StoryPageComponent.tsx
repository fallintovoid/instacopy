import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../lib/hooks/hooks";
import { setCurrentStoriesIndex } from "../../store/slices/stories/users";
import { BsPauseFill } from "react-icons/bs";

import s from "./StoryPageComponent.module.scss";

type Props = {
  avi: string;
  username: string;
  img: string;
  liked: boolean;
  id: string;
  storyId: string;
};

const StoryPageComponent = ({ avi, username, img }: Props) => {
  const dispatch = useAppDispatch();
  const { currentStoriesIndex, users } = useAppSelector((state) => state.users);
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [pause, setPause] = useState(false);

  const navigateToStory = () => {
    if (currentStoriesIndex >= users.length - 1) {
      dispatch(setCurrentStoriesIndex(0));
      setWidth(0);
      navigate(`/${users[0].id}`);
    } else {
      const newIndex = currentStoriesIndex + 1;
      setWidth(0);
      dispatch(setCurrentStoriesIndex(newIndex));
      navigate(`/${users[newIndex].id}`);
    }
  };

  useEffect(() => {
    if (width >= ref.current!.offsetWidth) {
      setWidth(0);
      navigateToStory();
    }
  }, [width]);

  useEffect(() => {
    const timeline = setInterval(() => {
      setWidth((prev) => prev + 1);
    }, 10);

    return () => {
      clearInterval(timeline);
    };
  }, [currentStoriesIndex]);

  return (
    <div className={s.story} onClick={navigateToStory}>
      <div className={s.user}>
        <div className={s.timeline_gray} ref={ref}>
          <div
            className={`${s.timeline_white} ` + !pause ? `${s.active}` : ""}
            style={{ transitionDuration: "5s" }}
          ></div>
        </div>
        <div className={s.userinfo}>
          <img src={avi} className={s.user_avi} />
          <p>{username}</p>
          <BsPauseFill className={s.icon} onClick={() => setPause((prev) => !prev)} />
        </div>
      </div>
      <img src={img} className={s.main_photo} />
    </div>
  );
};

export default StoryPageComponent;
