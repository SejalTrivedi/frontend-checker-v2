import React from 'react';
import { Meta, StoryObj, Story } from '@storybook/react';
import {
  ContentBodyTitle,
  ContentBodyTitleProps,
} from './ContentBodyTitle';
import { Stack, color } from '@mui/system';
import { Button } from '../../atoms/Button/Button';
import { Download, PlusOne } from '@mui/icons-material';
import { Typography } from '@mui/material';
const meta = {
  title: 'Components/Molecules/ContentBodyTitle',
  component: ContentBodyTitle,
} satisfies Meta<typeof ContentBodyTitle>;

export default meta;

const Template: Story<ContentBodyTitleProps> = (args) => (
  <ContentBodyTitle {...args} />
);

export const SampleContentBodyTitle = Template.bind({});
SampleContentBodyTitle.args = {
  bodyTitle: <Typography>Candidates</Typography>,
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
};
