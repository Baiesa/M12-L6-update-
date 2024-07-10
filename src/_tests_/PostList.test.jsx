// src/__tests__/PostList.test.jsx
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import PostList from '../components/PostList';

jest.mock('axios');

test('fetches and displays posts', async () => {
  axios.get.mockResolvedValue({
    data: [{ id: 1, title: 'Test Post', body: 'Test Body' }]
  });

  render(<PostList />);

  await waitFor(() => screen.getByText('Test Post'));

  expect(screen.getByText('Test Post')).toBeInTheDocument();
});