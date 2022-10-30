import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { StateStatus } from "../../common";
import StoryPageComponent from "../../components/StoryPageComponent/StoryPageComponent";
import { useAppDispatch, useAppSelector } from "../../lib/hooks/hooks";
import { setCurrentStoriesIndex } from "../../store/slices/stories/users";

import s from "./StoriesPage.module.scss";

const StoriesPage = () => {
  const { storyId } = useParams();
  const dispatch = useAppDispatch();
  const { status, users } = useAppSelector((state) => state.users);

  useEffect(() => {
    const index = users.findIndex((item) => item.id === storyId);
    dispatch(setCurrentStoriesIndex(index + 1));
  }, []);

  const renderStory = (users: User[]): JSX.Element => {
    const currentUserStory: User = users.find((item) => item.id == storyId)!;
    return (
      <StoryPageComponent
        avi={currentUserStory!.avi}
        img={currentUserStory!.story}
        username={currentUserStory!.username}
        liked={currentUserStory!.liked}
        id={currentUserStory!.id}
        storyId={storyId!}
      />
    );
  };

  return <div className={s.stories_page}>{status === StateStatus.OK && renderStory(users)}</div>;
};
export default StoriesPage;
