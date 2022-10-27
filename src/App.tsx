import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Homepage from "./routes/HomePage/Homepage";
import { useEffect } from "react";
import { fetchAvi } from "./store/slices/stories/stories";
import { useAppDispatch, useAppSelector } from "./lib/hooks/hooks";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { getPhotoForProfile } from "./store/slices/profile/profile";
import Settings from "./routes/ProfilePage/Settings/SettingsPage";
import Profile from "./routes/ProfilePage/ProfilePage";
import StoriesPage from "./routes/StoriesPage/StoriesPage";
import { fetchStories } from "./store/slices/stories/stories";

function App() {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.stories.stories);

  useEffect((): void => {
    dispatch(fetchAvi());
    dispatch(getPhotoForProfile());
  }, []);

  useEffect(() => {
    if (users.length) {
      dispatch(fetchStories(users));
    }
  }, [users]);

  return (
    <SkeletonTheme baseColor="#DADADA" highlightColor="#B7B2B2 ">
      <BrowserRouter>
        <Routes />
        <Layout>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="profile" element={<Profile />} />
            <Route path="profile/settings" element={<Settings />} />
            <Route path="/:storieId" element={<StoriesPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </SkeletonTheme>
  );
}

export default App;
