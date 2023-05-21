import React from 'react';
import { Meta, StoryObj, Story } from '@storybook/react';
import { Checkbox, CheckboxProps } from './CheckBox';

const meta = {
  title: 'Components/Atoms/CheckBox',
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export default meta;
// type Story = StoryObj<typeof meta>;

const Template: Story<CheckboxProps> = (args) => (
  <Checkbox {...args} />
);

export const SampleCheckBox = Template.bind({});
SampleCheckBox.args = {};
