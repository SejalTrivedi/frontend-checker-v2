import React from 'react';
import { render, screen } from '@testing-library/react';
import { Menu } from './Menu';
import { Home } from '@mui/icons-material';

describe('Menu Component', () => {
  it('renders list of menu', () => {
    const menuName = 'Home';
    const menuIcon = <Home></Home>;
    render(<Menu menuIcon={menuIcon} menuName={menuName} />);
    const menuElement = screen.getByText(menuName);
    expect(menuElement).toBeInTheDocument();
  });
});
