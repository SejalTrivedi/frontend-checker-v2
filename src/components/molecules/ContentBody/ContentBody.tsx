import React from 'react';
import { Paper, Typography } from '@mui/material';
import { Stack } from '@mui/system';

export type ContentBodyProps = {
  contentBox: React.ReactElement | null;
};
export const ContentBody = ({ ...props }: ContentBodyProps) => {
  return <Paper {...props}>{props.contentBox}</Paper>;
};