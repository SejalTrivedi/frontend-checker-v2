import React from 'react';
import { Meta, StoryObj, Story } from '@storybook/react';
import { Content, ContentProps } from './Content';
import { Stack } from '@mui/system';
import { Button } from '../../atoms/Button/Button';
import {
  Download,
  PlusOne,
  SearchOutlined,
  FilterListOutlined,
  MoreVertOutlined,
} from '@mui/icons-material';
import { Table } from '../../molecules/Table/Table';
import { demoTableStoryRows } from '../../data/data';
import {
  Card,
  Grid,
  Typography,
  OutlinedInput,
  InputAdornment,
  Divider,
} from '@mui/material';

const meta = {
  title: 'Components/Organisms/Content',
  component: Content,
} satisfies Meta<typeof Content>;

export default meta;
// type Story = StoryObj<typeof meta>;

const Template: Story<ContentProps> = (args) => <Content {...args} />;

export const SampleContent = Template.bind({});
SampleContent.args = {
  rightButtonList: (
    <Stack direction={'row'} 
    // paddingLeft={'1300px'} 
    spacing={2}>
      <Button
        children={'Export'}
        variant={'outlined'}
        startIcon={<Download />}
      />
      <Button
        children={'Manual Order'}
        variant={'contained'}
        startIcon={<PlusOne />}
      />
    </Stack>
  ),
  bodyTitle: 'Candidate',
  contentBox: (
    <Card
      sx={{
        boxShadow: '0px 4px 28px 0px #2D2D2F1A',
        // position: 'absolute',
        // width: '1056px',
        // height: '646px',
        // left: '0px',
        // top: '0px',
        background: '#FFFFFF',
        borderRadius: '6px'
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
          <Grid 
          container
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
