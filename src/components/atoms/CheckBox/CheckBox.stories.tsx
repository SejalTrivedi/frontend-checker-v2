import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Checkbox, CheckboxProps } from './CheckBox';

const meta = {
  title: 'Components/Atoms/CheckBox',
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export default meta;

const Template: StoryFn<CheckboxProps> = (args) => (
  <Checkbox {...args} />
);

export const SampleCheckBox = Template.bind({});
SampleCheckBox.args = {};
