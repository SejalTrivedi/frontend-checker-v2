import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MenuList } from './MenuList';
import { BrowserRouter as Router } from 'react-router-dom';

describe('MenuList', () => {
  it('renders MenuList from API call', async () => {
    render(
      <Router>
        <MenuList />
      </Router>
    );
    await waitFor(() => {
      expect(screen.getByText('Candidates')).toBeInTheDocument();
    });
  });
});
