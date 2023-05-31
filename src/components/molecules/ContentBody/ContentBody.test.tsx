import React from 'react';
import { render, screen } from '@testing-library/react';
import { ContentBody } from './ContentBody';
import { Typography } from '@mui/material';

describe('ContentBody', () => {
  it('should render the ContentBody with the correct element', () => {
    const bodyElement = <Typography>Dialog Title</Typography>;
    render(<ContentBody contentBox={bodyElement} />);
    const contentBodyElement = screen.getByText('Dialog Title');
    expect(contentBodyElement).toBeInTheDocument();
  });
});
