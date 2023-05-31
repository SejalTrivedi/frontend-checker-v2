import React from 'react';
import { render, screen } from '@testing-library/react';
import { CourtSearchList } from './CourtSearchList';

jest.mock('axios'); // Mock axios for API call

describe('CourtSearchList', () => {
  it('renders CourtSearchList from API call', async () => {
    render(<CourtSearchList candidateId={1} />);
    // const nameElement = screen.getByText('Test CourtSearchList Body');
    // expect(nameElement).toBeInTheDocument();
  });
});
