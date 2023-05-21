import React from 'react';
import { Meta, StoryObj, Story } from '@storybook/react';
import { ContentBody, ContentBodyProps } from './ContentBody';
import { Table, TableProps } from '../Table/Table';
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
import { TextField } from '../../atoms/TextField/TextField';
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
// type Story = StoryObj<typeof meta>;

const Template: Story<ContentBodyProps> = (args) => (
  <ContentBody {...args} />
);
export const SampleContentBody = Template.bind({});
SampleContentBody.args = {
  contentBox: (
    <Card
      sx={{
        boxShadow: '0px 4px 28px 0px #2D2D2F1A',
        // position: 'absolute',
        // width: '1056px',
        // height: '646px',
        // left: '0px',
        // top: '0px',
        // background: '#FFFFFF',
        borderRadius: '6px',
      }}
    >
      <Grid
        container
        spacing={2}
        alignItems="center"
        sx={{
          // height: '36px',
          // width: '1056px',
          // left: '16px',
          // top: '12px',
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
          <Grid  container
            spacing={2}
            alignItems="center">
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
      <Table dataRows={demoTableStoryRows}></Table>
    </Card>
  ),
};