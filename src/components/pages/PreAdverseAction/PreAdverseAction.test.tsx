import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { PreAdverseAction } from './PreAdverseAction';
import { BrowserRouter as Router } from 'react-router-dom';

jest.mock('axios'); // Mock axios for API call

describe('PreAdverseAction', () => {
  it('renders PreAdverseAction from API call', async () => {
    render(
      <Router>
        <PreAdverseAction />
      </Router>
    );
    await waitFor(() => {
      expect(screen.getByText('kyle@checkr.com')).toBeInTheDocument();
    });
  });
});
