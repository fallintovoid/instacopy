import React, { useEffect } from "react";
import Stories from "../../components/Stories/Stories";
import PostList from "../../components/PostList/PostList";
import Profile from "../../components/Profile/Profile";

import "./Homepage.scss";

const Homepage = () => {
  useEffect(() => {
    document.title = "Home";
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
