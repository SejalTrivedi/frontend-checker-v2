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
        // height: '700px',
        // backgroundColor: '#CECECE',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
      {...props}
    >
      {/* <Stack direction={'row'}> */}
        {/* <Stack
          height={'24px'}
          width={'31px'}
          left={'100px'}
          top={'50px'}
        > */}
          <Typography
            color={'#2C2C2E'}
            font-family={'Inter'}
            font-size={'20px'}
            font-weight={'200px'}
            line-height={'30px'}
            letter-spacing={'0em'}
            text-align={'left'}
          >
            {props.bodyTitle}
          </Typography>
        {/* </Stack> */}
        {props.rightButtonList}
      {/* </Stack> */}
    </Box>
  );
};
