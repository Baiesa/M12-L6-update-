// src/components/UpdatePostForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const UpdatePostForm = ({ post, onUpdate }) => {
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`https://jsonplaceholder.typicode.com/posts/${post.id}`, { title, body })
      .then(response => {
        onUpdate(response.data);
      })
      .catch(error => console.error('Error updating post:', error));
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
      <button type="submit">Update Post</button>
    </form>
  );
};

export default UpdatePostForm;