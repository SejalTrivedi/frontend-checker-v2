import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Dialog, DialogProps } from './Dialog';

const meta = {
  title: 'Components/Atoms/Dialog',
  component: Dialog,
} satisfies Meta<typeof Dialog>;

export default meta;

const Template: StoryFn<DialogProps> = (args) => <Dialog {...args} />;

export const SampleDialog = Template.bind({});
SampleDialog.args = {
  open: true,
  title: 'Sample Dialog',
  children: (
    <div>
      <p>Data saved successfully.</p>
    </div>
  ),
};
