import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Homepage from "./routes/HomePage/Homepage";
import { useEffect } from "react";
import { useAppDispatch } from "./lib/hooks/hooks";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { getPhotoForProfile } from "./store/slices/profile/profile";
import Settings from "./routes/ProfilePage/Settings/SettingsPage";
import Profile from "./routes/ProfilePage/ProfilePage";
import StoriesPage from "./routes/StoriesPage/StoriesPage";
import { getUsersInfo } from "./store/slices/stories/users";

function App() {
  const dispatch = useAppDispatch();

  useEffect((): void => {
    dispatch(getUsersInfo());
    dispatch(getPhotoForProfile());
  }, []);

  return (
    <SkeletonTheme baseColor="#DADADA" highlightColor="#B7B2B2 ">
      <BrowserRouter>
        <Routes />
        <Layout>
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/settings" element={<Settings />} />
            <Route path="/:storyId" element={<StoriesPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </SkeletonTheme>
  );
}

export default App;
