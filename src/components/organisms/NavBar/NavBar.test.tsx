import React from 'react';
import { render, screen } from '@testing-library/react';
import { LeftNavBar } from './NavBar';

jest.mock('axios'); // Mock axios for API call

describe('LeftNavBar', () => {
  it('renders LeftNavBar from API call', async () => {
    // const { getByText } = render(<LeftNavBar />);
    // const nameElement = getByText('Ronak');
    // expect(nameElement).toBeInTheDocument();
  });
});
