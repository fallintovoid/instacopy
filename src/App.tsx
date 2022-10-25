import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Homepage from "./routes/HomePage/Homepage";
import { useEffect } from "react";
import { fetchAvi } from "./store/slices/stories/stories";
import { useAppDispatch } from "./lib/hooks/hooks";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { getPhotoForProfile } from "./store/slices/profile/profile";
import Loading from "./components/Loading/Loading";

const Profile = lazy(() => import("./routes/ProfilePage/ProfilePage"));
const Settings = lazy(() => import("./routes/ProfilePage/Settings/SettingsPage"));

function App() {
  const dispatch = useAppDispatch();

  useEffect((): void => {
    dispatch(fetchAvi());
    dispatch(getPhotoForProfile());
  }, [dispatch]);

  return (
    <SkeletonTheme baseColor="#DADADA" highlightColor="#B7B2B2 ">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route
              path="profile"
              element={
                <Suspense fallback={<Loading />}>
                  <Profile />
                </Suspense>
              }
            />
            <Route path="profile/settings" element={<Settings />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </SkeletonTheme>
  );
}

export default App;
