import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Homepage from './routes/HomePage/Homepage';
import { useEffect } from 'react'
import { fetchAvi } from './store/slices/stories/stories'
import { useAppDispatch, useAppSelector } from './lib/hooks/hooks'
import { getPosts } from './store/slices/posts/posts';
import Profile from './routes/ProfilePage/ProfilePage';
import Settings from './routes/ProfilePage/Settings/SettingsPage';

function App() {
  const dispatch = useAppDispatch()
  const users = useAppSelector(state => state.stories.stories)

  useEffect((): void => {
    dispatch(fetchAvi())
  }, [dispatch])

  useEffect(() => {
    dispatch(getPosts(users!))
  }, [users, dispatch])

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='profile' element={<Profile/>}/>
          <Route path='profile/settings' element={<Settings/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
