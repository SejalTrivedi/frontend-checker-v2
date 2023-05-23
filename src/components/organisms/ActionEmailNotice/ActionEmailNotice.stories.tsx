import React from 'react';
import { Meta, StoryObj, Story } from '@storybook/react';
import {
  ActionEmailNotice,
  ActionEmailNoticeProps,
} from './ActionEmailNotice';
import { Paper, Typography } from '@mui/material';

const meta = {
  title: 'Components/Organisms/ActionEmailNotice',
  component: ActionEmailNotice,
} satisfies Meta<typeof ActionEmailNotice>;

export default meta;

const Template: Story<ActionEmailNoticeProps> = (args) => (
  <ActionEmailNotice {...args} />
);

export const SampleActionEmailNotice = Template.bind({});
SampleActionEmailNotice.args = {
  from: 'Ronak Delvadiya',
  to: 'Ronak Delvadiy',
  subject: 'Leave',
  autoSendEmailAfterDays: 7,
  emailContent:
    '<h1>Hello, world!</h1><p>This is some HTML content.</p>',
};
