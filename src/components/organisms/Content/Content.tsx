import { Card, Paper } from '@mui/material';
import React from 'react';
import { ContentBody } from '../../molecules/ContentBody/ContentBody';
import { ContentBodyTitle } from '../../molecules/ContentBodyTitle/ContentBodyTitle';

export type ContentProps = {
  rightButtonList: React.ReactElement | null;
  bodyTitle: React.ReactElement;
  contentBox: React.ReactElement | null;
};

export const Content = ({ ...props }: ContentProps) => {
  return (
    <>
      <ContentBodyTitle
        bodyTitle={props.bodyTitle}
        rightButtonList={props.rightButtonList}
      ></ContentBodyTitle>
      <Paper>
        <ContentBody contentBox={props.contentBox}></ContentBody>
      </Paper>
    </>
  );
};
