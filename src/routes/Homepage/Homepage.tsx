import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../lib/hooks/hooks";
import Stories from "../../components/Stories/Stories";
import PostList from "../../components/PostList/PostList";
import Profile from "../../components/Profile/Profile";
import { getPosts } from "../../store/slices/posts/posts";

import "./Homepage.scss";

const Homepage = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.stories.stories);
  const [page, setPage] = useState(1);
  const [fetching, setFetching] = useState(true);

  const scrollHandler = (e: any) => {
    // TODO: как это описать?
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
      setFetching(true);
    }
  };

  useEffect(() => {
    if (fetching && users.length) {
      dispatch(getPosts({ users, page }));
      setPage((prev) => prev + 1);
      setFetching(false);
    }
  }, [fetching, users]);

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

export default Homepage;
