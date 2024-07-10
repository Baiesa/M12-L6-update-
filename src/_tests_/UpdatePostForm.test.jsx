// src/__tests__/UpdatePostForm.test.jsx
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import UpdatePostForm from '../components/UpdatePostForm';

jest.mock('axios');

test('updates a post and updates the UI', async () => {
  const handleUpdate = jest.fn();
  const post = { id: 1, title: 'Old Title', body: 'Old Body' };
  axios.put.mockResolvedValue({
    data: { id: 1, title: 'Updated Title', body: 'Updated Body' }
  });

  render(<UpdatePostForm post={post} onUpdate={handleUpdate} />);

  fireEvent.change(screen.getByPlaceholderText(/title/i), {
    target: { value: 'Updated Title' }
  });
  fireEvent.change(screen.getByPlaceholderText(/body/i), {
    target: { value: 'Updated Body' }
  });
  fireEvent.click(screen.getByText(/update post/i));

  await waitFor(() => expect(handleUpdate).toHaveBeenCalledWith({
    id: 1,
    title: 'Updated Title',
    body: 'Updated Body'
  }));
});