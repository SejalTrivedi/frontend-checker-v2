import React from 'react';
import { Meta, StoryObj, Story } from '@storybook/react';
import { MuiOtpInput, MuiOtpInputProps } from './OtpInput';

const meta = {
  title: 'Components/Atoms/OTPInput',
  component: MuiOtpInput,
} satisfies Meta<typeof MuiOtpInput>;

export default meta;
// type Story = StoryObj<typeof meta>;

const Template: Story<MuiOtpInputProps> = (args) => (
  <MuiOtpInput {...args} />
);

export const OtpTextField = Template.bind({});
OtpTextField.args = {};
