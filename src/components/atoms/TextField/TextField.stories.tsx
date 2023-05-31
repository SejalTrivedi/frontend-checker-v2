import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { TextField, BaseTextFieldProps } from './TextField';

const meta = {
  title: 'Components/Atoms/TextField',
  component: TextField,
} satisfies Meta<typeof TextField>;

export default meta;

const Template: StoryFn<BaseTextFieldProps> = (args) => (
  <TextField {...args} />
);

export const SimpleOutlinedTextField = Template.bind({});
SimpleOutlinedTextField.args = {
  variant: 'outlined',
  placeholder: 'Simple Outlined TextField',
};

export const PasswordContentTextField = Template.bind({});
PasswordContentTextField.args = {
  variant: 'outlined',
  placeholder: 'Password content',
  type: 'password',
};

export const CustomDateField = Template.bind({});
CustomDateField.args = {
  type: 'date',
  value: Date().toString,
};
