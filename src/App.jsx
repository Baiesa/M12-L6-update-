// src/App.jsx
import React from 'react';
import PostList from './components/PostList';
import CreatePostForm from './components/CreatePostForm';

const App = () => {
  return (
    <div className="App">
      <CreatePostForm />
      <PostList />
    </div>
  );
};

export default App;