import React from "react";
import s from "./Stories.module.scss";
import { useAppSelector } from "../../lib/hooks/hooks";
import Story from "../Story/Story";
import { StateStatus } from "../../common";
import SkeletonStories from "../SkeletonStories/SkeletonStories";

const Stories = () => {
  const { stories, status } = useAppSelector((state) => state.stories);

  const storiesList = (stories: User[]): JSX.Element[] | JSX.Element => {
    return stories.map((story) => {
      return <Story avi={story.avi.large} username={story.username} key={story.username} />;
    });
  };

  return (
    <div className={s.stories}>
      {status === StateStatus.OK && storiesList(stories)}
      {status === StateStatus.IDLE && <SkeletonStories />}
    </div>
  );
};

export default Stories;
