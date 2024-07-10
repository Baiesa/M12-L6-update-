// src/__tests__/CreatePostForm.test.jsx
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import CreatePostForm from '../components/CreatePostForm';

jest.mock('axios');

test('creates a new post and updates the UI', async () => {
  const handleCreate = jest.fn();
  axios.post.mockResolvedValue({
    data: { id: 101, title: 'New Post', body: 'New Post Body' }
  });

  render(<CreatePostForm onCreate={handleCreate} />);

  fireEvent.change(screen.getByPlaceholderText(/title/i), {
    target: { value: 'New Post' }
  });
  fireEvent.change(screen.getByPlaceholderText(/body/i), {
    target: { value: 'New Post Body' }
  });
  fireEvent.click(screen.getByText(/create post/i));

  await waitFor(() => expect(handleCreate).toHaveBeenCalledWith({
    id: 101,
    title: 'New Post',
    body: 'New Post Body'
  }));
});