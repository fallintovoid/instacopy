import React from 'react';
import './App.scss';
import Layout from './components/Layout/Layout';
import PostList from './components/PostList/PostList';
import Profile from './components/Profile/Profile';
import Stories from './components/Stories/Stories';

function App() {
  return (
    <Layout>
      <div className="main">
        <Stories/>
        <PostList/>
      </div>
      <div className='profile'>
        <Profile/>
      </div>
    </Layout>
  );
}

export default App;
