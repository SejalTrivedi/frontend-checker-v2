import React from 'react';
import {
  render,
  screen,
  waitFor,
  fireEvent,
} from '@testing-library/react';
import { CandidateDetail } from './CandidateDetail';
import { BrowserRouter as Router } from 'react-router-dom';

import axios from 'axios';

jest.mock('axios'); // Mock axios for API call

describe('CandidateDetail', () => {
  it('renders CandidateDetail from API call', async () => {
    const mockCandidateResponse = {
      data: {
        id: 1,
        name: 'John Smith',
        status: 'Clear',
        adjudication: null,
        location: 'Barrouallie',
        date: '2/22/2022',
        email: 'John@gmail.com',
        dob: '2/22/2022',
      },
    };
    (axios.get as jest.Mock).mockResolvedValueOnce(
      mockCandidateResponse
    );

    render(
      <Router>
        <CandidateDetail />
      </Router>
    );

    await waitFor(() => {
      expect(screen.getByText('Name')).toBeInTheDocument();
    });
  });

  it('renders page after engaged', async () => {
    const { getByText } = render(
      <Router>
        <CandidateDetail />
      </Router>
    );
    const accordionTitle = getByText('Engage');
    fireEvent.click(accordionTitle);
    const accordionContent = getByText('Engage');
    expect(accordionContent).toBeInTheDocument();
  });

  it('renders page after Pre-Adverse Action', async () => {
    const { getByText } = render(
      <Router>
        <CandidateDetail />
      </Router>
    );
    const accordionTitle = getByText('Pre-Adverse Action');
    fireEvent.click(accordionTitle);
    const accordionContent = getByText('Pre-Adverse Action');
    expect(accordionContent).toBeInTheDocument();
  });
});
