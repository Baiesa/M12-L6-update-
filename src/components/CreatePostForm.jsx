// src/components/CreatePostForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const CreatePostForm = ({ onCreate }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://jsonplaceholder.typicode.com/posts', { title, body })
      .then(response => {
        onCreate(response.data);
        setTitle('');
        setBody('');
      })
      .catch(error => console.error('Error creating post:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button type="submit">Create Post</button>
    </form>
  );
};

export default CreatePostForm;