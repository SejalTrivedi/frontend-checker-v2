import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByAltText(/Recruit!!/i);
  expect(linkElement).toBeInTheDocument();
});
