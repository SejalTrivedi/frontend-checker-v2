import React from 'react';
import { render, screen } from '@testing-library/react';
import { Login } from './Login';

jest.mock('axios'); // Mock axios for API call

describe('Login', () => {
  it('renders Login from API call', async () => {
    render(<Login />);
    const nameElement = screen.getByText('Sign In with Google');
    expect(nameElement).toBeInTheDocument();
  });
});
