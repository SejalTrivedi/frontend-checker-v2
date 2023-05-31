import React from 'react';
import { render, screen } from '@testing-library/react';
import { Content } from './Content';
import { Stack, Typography } from '@mui/material';
import { Button } from '../../atoms/Button/Button';

jest.mock('axios'); // Mock axios for API call

describe('Content', () => {
  it('renders Content from API call', async () => {
    const rightButtonList = (
      <Stack direction={'row'} spacing={2}>
        <Button children={'First Button'} variant={'outlined'} />
        <Button children={'Second Order'} variant={'contained'} />
      </Stack>
    );
    const bodyTitle = <Typography>Test Content Body</Typography>;
    const contentBox = <Typography>Candidate Information</Typography>;
    render(
      <Content
        bodyTitle={bodyTitle}
        rightButtonList={rightButtonList}
        contentBox={contentBox}
      />
    );
    const nameElement = screen.getByText('Test Content Body');
    expect(nameElement).toBeInTheDocument();
  });
});
