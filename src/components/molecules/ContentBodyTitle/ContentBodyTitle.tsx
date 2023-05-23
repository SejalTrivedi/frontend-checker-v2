import React from 'react';
import { Box, Typography } from '@mui/material';
import { Stack } from '@mui/system';

export type ContentBodyTitleProps = {
  rightButtonList: React.ReactElement | null;
  bodyTitle: string;
};

export const ContentBodyTitle = ({
  ...props
}: ContentBodyTitleProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '18px'
      }}
      {...props}
    >
      <Typography
        color={'#2C2C2E'}
        fontFamily={'Inter'}
        fontSize={'20px'}
        fontWeight={'200px'}
        lineHeight={'30px'}
        letterSpacing={'0em'}
        textAlign={'left'}
      >
        {props.bodyTitle}
      </Typography>
      {props.rightButtonList}
    </Box>
  );
};
