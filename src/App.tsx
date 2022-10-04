import React from 'react';
import './App.scss';
import Layout from './components/Layout/Layout';
import Stories from './components/Stories/Stories';

function App() {
  return (
    <Layout>
      <div className="App">
        <Stories/>
      </div>
    </Layout>
  );
}

export default App;
