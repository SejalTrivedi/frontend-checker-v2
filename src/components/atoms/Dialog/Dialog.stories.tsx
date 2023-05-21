import React from 'react';
import { Meta, StoryObj, Story } from '@storybook/react';
import { Dialog, DialogProps } from './Dialog';

const meta = {
  title: 'Components/Atoms/Dialog',
  component: Dialog,
} satisfies Meta<typeof Dialog>;

export default meta;
// type Story = StoryObj<typeof meta>;

const Template: Story<DialogProps> = (args) => <Dialog {...args} />;

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
