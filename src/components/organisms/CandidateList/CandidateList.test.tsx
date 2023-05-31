import React from 'react';
import { render, waitFor } from '@testing-library/react';
import axios from 'axios';
import { CandidateList } from './CandidateList';

jest.mock('axios');

describe('CandidateList', () => {
  test('fetches data and renders table', async () => {
    const mockData = [
      {
        Name: 'John Doe',
        Adjudication: 'Some Adjudication',
        Status: 'Approved',
        Date: '2023-05-31',
        Location: 'Some Location',
      },
      // Add more mock data if needed
    ];

    const axiosGetSpy = jest.spyOn(axios, 'get');
    axiosGetSpy.mockResolvedValueOnce({ data: mockData });

    const { getByText } = render(<CandidateList />);

    await waitFor(() => {
      // Wait for the data to be fetched and table to render
      expect(getByText('John Doe')).toBeInTheDocument();
      expect(getByText('Some Adjudication')).toBeInTheDocument();
      expect(getByText('Approved')).toBeInTheDocument();
      expect(getByText('2023-05-31')).toBeInTheDocument();
      expect(getByText('Some Location')).toBeInTheDocument();
    }, { timeout: 5000 });

    expect(axiosGetSpy).toHaveBeenCalledWith('http://localhost:3000/candidate/');
    axiosGetSpy.mockRestore();
  });

  test('handles error when fetching data', async () => {
    const errorMessage = 'Failed to fetch data';
    const axiosGetSpy = jest.spyOn(axios, 'get');
    axiosGetSpy.mockRejectedValueOnce(new Error(errorMessage));

    const { getByText } = render(<CandidateList />);

    await waitFor(() => {
      // Wait for the error handling to complete
      expect(getByText('Error fetching data: Failed to fetch data')).toBeInTheDocument();
    });

    expect(axiosGetSpy).toHaveBeenCalledWith('http://localhost:3000/candidate/');
    axiosGetSpy.mockRestore();
  });
});
