import React from "react";
import s from "./Stories.module.scss";
import { useAppSelector } from "../../lib/hooks/hooks";
import Story from "../Story/Story";
import { StateStatus } from "../../common";
import SkeletonStories from "../SkeletonStories/SkeletonStories";

const Stories = () => {
  const { users, status } = useAppSelector((state) => state.users);

  const storiesList = (users: User[]): JSX.Element[] | JSX.Element => {
    return users.map((user) => {
      return <Story avi={user.avi} username={user.username} key={user.id} id={user.id} />;
    });
  };

  return (
    <div className={s.stories}>
      {status === StateStatus.OK && storiesList(users)}
      {status === StateStatus.IDLE && <SkeletonStories />}
    </div>
  );
};

export default Stories;
