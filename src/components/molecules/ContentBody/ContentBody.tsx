import React from 'react';
import { Paper } from '@mui/material';

export type ContentBodyProps = {
  contentBox: React.ReactElement | null;
};
export const ContentBody = ({ ...props }: ContentBodyProps) => {
  return (
    <Paper elevation={0} {...props}>
      {props.contentBox}
    </Paper>
  );
};
