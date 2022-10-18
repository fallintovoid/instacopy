import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Homepage from './routes/Homepage/Homepage';
import { useEffect } from 'react'
import { fetchAvi } from './store/slices/stories/stories'
import { useAppDispatch, useAppSelector } from './lib/hooks/hooks'
import { getPosts } from './store/slices/posts/posts';
import Profile from './routes/Profile/Profile';
import Settings from './routes/Profile/Settings/Settings';

function App() {
  const dispatch = useAppDispatch()
  const users = useAppSelector(state => state.stories.stories)

  useEffect((): void => {
    dispatch(fetchAvi())
  }, [])

  useEffect(() => {
    dispatch(getPosts(users!))
  }, [users])

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
