import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../lib/hooks/hooks";

import s from "./StoryPageComponent.module.scss";

type Props = {
  avi: string;
  username: string;
  img: string;
  liked: boolean;
  id: string;
  storie: [string];
  setStorie: React.Dispatch<React.SetStateAction<[string]>>;
};

const StoryPageComponent = ({ avi, username, img, storie, setStorie }: Props) => {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { storiesPage } = useAppSelector((state) => state.stories);

  useEffect(() => {
    const timeline = setInterval(() => {
      setWidth((prev) => prev + 1);
    }, 5);

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
      <img src={img} className={s.main_photo} />
    </div>
  );
};

export default StoryPageComponent;
