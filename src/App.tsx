import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Homepage from './routes/Homepage/Homepage';
import { useEffect } from 'react'
import { fetchAvi } from './store/slices/stories/stories'
import { useAppDispatch, useAppSelector } from './lib/hooks/hooks'
import { getPosts } from './store/slices/posts/posts';
import Profile from './routes/ProfilePage/ProfilePage';
import Settings from './routes/ProfilePage/Settings/SettingsPage';
import { SkeletonTheme } from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";
import { getPhotoForProfile } from './store/slices/profile/profile'

function App() {
  const dispatch = useAppDispatch()
  const users = useAppSelector(state => state.stories.stories)

  useEffect((): void => {
    dispatch(fetchAvi())
    dispatch(getPhotoForProfile())
  }, [dispatch])

  useEffect(() => {
    dispatch(getPosts(users!))
  }, [users, dispatch])

  return (
    <SkeletonTheme baseColor="#DADADA" highlightColor="#B7B2B2 ">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='profile' element={<Profile/>}/>
            <Route path='profile/settings' element={<Settings/>}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    </SkeletonTheme>
    
  );
}

export default App;
