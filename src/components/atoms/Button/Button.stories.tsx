import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Button, ButtonProps } from './Button';
import { GitHub, Logout, PlusOneOutlined } from '@mui/icons-material';

const meta = {
  title: 'Components/Atoms/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const OutlinedButton = Template.bind({});
OutlinedButton.args = {
  children: 'Outlined Button',
  variant: 'outlined',
};

export const ContainedButton = Template.bind({});
ContainedButton.args = {
  children: 'Contained Button',
  variant: 'contained',
};

export const PlushOneItemButton = Template.bind({});
PlushOneItemButton.args = {
  children: 'Manual Order',
  variant: 'contained',
  startIcon: <PlusOneOutlined />,
};

export const SignInGitButton = Template.bind({});
SignInGitButton.args = {
  children: 'Sign In with GIT',
  variant: 'outlined',
  startIcon: <GitHub />,
};

export const LogOutIconButton = Template.bind({});
LogOutIconButton.args = {
  startIcon: <Logout />,
};
