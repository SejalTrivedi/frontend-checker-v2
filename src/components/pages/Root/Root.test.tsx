import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { RootLayout } from './Root';
import { BrowserRouter as Router } from 'react-router-dom';

describe('RootLayout', () => {
  it('renders RootLayout from API call', async () => {
    render(
      <Router>
        <RootLayout />
      </Router>
    );
    await waitFor(() => {
      expect(screen.getByText('Candidates')).toBeInTheDocument();
    });
  });
});
