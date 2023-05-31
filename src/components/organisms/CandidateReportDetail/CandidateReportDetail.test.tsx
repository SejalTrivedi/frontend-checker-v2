import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import axios from 'axios';
import { CandidateReportDetail } from './CandidateReportDetail';

jest.mock('axios'); // Mock axios for API call

describe('CandidateReportDetail', () => {
  it('renders report data from API call', async () => {
    render(<CandidateReportDetail candidateId={1} />);

    // Wait for the API call to resolve and data to be rendered
    await waitFor(() => {
      const nameElement = screen.getByText('Adjudication');
      expect(nameElement).toBeInTheDocument();
    });
  });
});
