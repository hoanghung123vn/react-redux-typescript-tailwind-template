import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello world', () => {
  render(<App />);
  const hello = screen.getByText(/hello world/i);
  expect(hello).toBeInTheDocument();
});
