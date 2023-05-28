import { Meta, Story } from '@storybook/react';
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

const Template: Story<ContentProps> = (args) => <Content {...args} />;

export const SampleContent = Template.bind({});
SampleContent.args = {
  rightButtonList: (
    <Stack direction={'row'} spacing={2}>
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
  bodyTitle: <Typography>Candidate</Typography>,
  contentBox: (
    <Card
      sx={{
        background: '#FFFFFF',
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
                placeholder='Search any candidate'
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
