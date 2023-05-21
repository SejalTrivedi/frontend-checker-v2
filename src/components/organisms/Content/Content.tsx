import { Card, Paper } from '@mui/material';
import React from 'react';
import {
  ContentBody,
  ContentBodyProps,
} from '../../molecules/ContentBody/ContentBody';
import {
  ContentBodyTitle,
  ContentBodyTitleProps,
} from '../../molecules/ContentBodyTitle/ContentBodyTitle';

export type ContentProps = {
  rightButtonList: React.ReactElement | null;
  bodyTitle: string;
  contentBox: React.ReactElement | null;
};

export const Content = ({ ...props }: ContentProps) => {
  return (
    <Paper>
      <ContentBodyTitle
        bodyTitle={props.bodyTitle}
        rightButtonList={props.rightButtonList}
      ></ContentBodyTitle>
      <ContentBody contentBox={props.contentBox}></ContentBody>
    </Paper>
  );
};
