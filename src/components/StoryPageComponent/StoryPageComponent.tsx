import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../lib/hooks/hooks";
import { setCurrentStoriesIndex } from "../../store/slices/stories/users";

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

  const navigateToStory = async () => {
    if (currentStoriesIndex === users.length - 1) {
      dispatch(setCurrentStoriesIndex(0));
      navigate(`/${users[currentStoriesIndex].id}`);
    } else {
      dispatch(setCurrentStoriesIndex(currentStoriesIndex + 1));
      navigate(`/${users[currentStoriesIndex].id}`);
    }
  };

  useEffect(() => {
    const timeline = setInterval(() => {
      setWidth((prev) => prev + 1);
      if (width >= ref.current!.offsetWidth) {
        navigateToStory();
      }
    }, 10);

    return () => {
      clearInterval(timeline);
    };
  }, []);

  return (
    <div className={s.story}>
      <div className={s.user}>
        <div className={s.timeline_gray} ref={ref}>
          <div className={s.timeline_white} style={{ width }}></div>
        </div>
        <div className={s.userinfo}>
          <img src={avi} className={s.user_avi} />
          <p>{username}</p>
        </div>
      </div>
      <img src={img} className={s.main_photo} onClick={navigateToStory} />
    </div>
  );
};

export default StoryPageComponent;
