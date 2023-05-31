import React from 'react';
import { render } from '@testing-library/react';
import { CandidatePage } from './Candidate';

jest.mock('axios'); // Mock axios for API call

describe('CandidatePage', () => {
  it('renders CandidatePage from API call', async () => {
    const { getByText } = render(<CandidatePage />);
    const nameElement = getByText('Candidates');
    expect(nameElement).toBeInTheDocument();
  });
});
