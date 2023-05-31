import React from 'react';
import { render, screen } from '@testing-library/react';
import { ContentBodyTitle } from './ContentBodyTitle';
import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { Button } from '../../atoms/Button/Button';

describe('ContentBodyTitle', () => {
  it('should render the ContentBodyTitle with the correct element', () => {
    const bodyTitle = <Typography>Content Body Title</Typography>;
    const rightButtonList = (
      <Stack direction={'row'}>
        <Button variant="contained" children="First button"></Button>
        <Button variant="outlined" children="Second button"></Button>
      </Stack>
    );
    render(
      <ContentBodyTitle
        bodyTitle={bodyTitle}
        rightButtonList={rightButtonList}
      />
    );
    const contentBodyTitleElement = screen.getByText(
      'Content Body Title'
    );
    expect(contentBodyTitleElement).toBeInTheDocument();
  });
});
