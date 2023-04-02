import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../lib/hooks/hooks";
import Stories from "../../components/Stories/Stories";
import PostList from "../../components/PostList/PostList";
import Profile from "../../components/Profile/Profile";
import { getPosts, setFetching, setPage } from "../../store/slices/posts/posts";

import "../HomePage/HomePage.scss";
import { StateStatus } from "../../common";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const { users, status } = useAppSelector((state) => state.users);
  const { page, fetching } = useAppSelector((state) => state.posts);
  const scrollHandler = (e: any) => {
    // TODO: как это описать?
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
      dispatch(setFetching(true));
    }
  };

  useEffect(() => {
    if (fetching && status === StateStatus.OK) {
      dispatch(getPosts({ users, page }));
      dispatch(setPage(page + 1));
      dispatch(setFetching(false));
    }
  }, [fetching, status]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    document.title = "Home";

    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <>
      <main className="feed-column">
        <Stories />
        <PostList />
      </main>
      <aside className="aside-column">
        <Profile />
      </aside>
    </>
  );
};

export default HomePage;
