import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { StateStatus } from "../../common";
import StoryPageComponent from "../../components/StoryPageComponent/StoryPageComponent";
import { useAppSelector } from "../../lib/hooks/hooks";

import s from "./StoriesPage.module.scss";

const StoriesPage = () => {
  const { storiesPage, storiesPageStatus } = useAppSelector((state) => state.stories);
  const { storieId } = useParams();
  const [storie, setStorie] = useState("");

  useEffect(() => {
    if (storiesPage.length) {
      const storiesIdArray = storiesPage.map((item) => {
        return item.id;
      });
      setStorie(storiesIdArray);
    }
  }, [storiesPage]);

  const renderStorie = (storiesPage: Storie[]): JSX.Element => {
    const currentStorie: Storie = storiesPage.find((item: Storie) => item.id == storieId)!;
    return (
      <StoryPageComponent
        avi={currentStorie!.avi.medium}
        img={currentStorie!.img}
        username={currentStorie!.username}
        liked={currentStorie!.liked}
        id={currentStorie!.id}
        storie={storie}
        setStorie={setStorie}
      />
    );
  };

  return <div className={s.stories_page}>{storiesPageStatus === StateStatus.OK && renderStorie(storiesPage)}</div>;
};
export default StoriesPage;
