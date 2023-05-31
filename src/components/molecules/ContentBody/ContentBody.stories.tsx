import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ContentBody, ContentBodyProps } from './ContentBody';
import { Table } from '../Table/Table';
import { demoTableStoryRows } from '../../data/data';
import {
  Button,
  Card,
  Divider,
  Typography,
  Grid,
  InputAdornment,
  OutlinedInput,
} from '@mui/material';
import {
  FilterListOutlined,
  MoreVertOutlined,
  SearchOutlined,
} from '@mui/icons-material';

const meta = {
  title: 'Components/Molecules/ContentBody',
  component: ContentBody,
} satisfies Meta<typeof ContentBody>;

export default meta;

const Template: StoryFn<ContentBodyProps> = (args) => (
  <ContentBody {...args} />
);
export const SampleContentBody = Template.bind({});
SampleContentBody.args = {
  contentBox: (
    <Card
      sx={{
        boxShadow: '0px 4px 28px 0px #2D2D2F1A',
        borderRadius: '6px',
      }}
    >
      <Grid
        container
        spacing={2}
        alignItems="center"
        sx={{
          borderRadius: '0px',
          background: '#FFFFFF',
          justifyContent: 'space-between',
        }}
      >
        <Grid item>
          <Typography className="text-end">
            Candidate Information
          </Typography>
        </Grid>
        <Grid item>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <OutlinedInput
                id="outlined-adornment-weight"
                startAdornment={
                  <InputAdornment position="start">
                    <SearchOutlined></SearchOutlined>
                  </InputAdornment>
                }
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  'aria-label': 'weight',
                }}
                placeholder="Search any candidate"
              />
            </Grid>
            <Grid item>
              <Button
                startIcon={<FilterListOutlined></FilterListOutlined>}
                variant="outlined"
                children="Filter"
              ></Button>
            </Grid>
            <Grid item>
              <Button
                startIcon={<MoreVertOutlined></MoreVertOutlined>}
                variant="outlined"
              ></Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Divider></Divider>
      <Table
        dataRows={demoTableStoryRows}
        sequenceColumn={[
          'name',
          'adjudication',
          'status',
          'date',
          'location',
        ]}
      ></Table>
    </Card>
  ),
};
