import React from 'react';
import { Meta, StoryObj, Story } from '@storybook/react';
import { Button, ButtonProps } from './Button';
import {
  Download,
  GitHub,
  Google,
  Logout,
  PlusOneOutlined,
} from '@mui/icons-material';

const meta = {
  title: 'Components/Atoms/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
// type Story = StoryObj<typeof meta>;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const OutlinedButton = Template.bind({});
OutlinedButton.args = {
  children: 'Outlined Button',
  variant: 'outlined',
};

// export const SignInButton = Template.bind({});
// SignInButton.args = { children: 'Sign In', variant: 'contained' };

export const ContainedButton = Template.bind({});
ContainedButton.args = {
  children: 'Contained Button',
  variant: 'contained',
};

// export const PreviewNoticeButton = Template.bind({});
// PreviewNoticeButton.args = {
//   children: 'Preview Notice',
//   variant: 'contained',
// };

// export const SubmitNoticeButton = Template.bind({});
// SubmitNoticeButton.args = {
//   children: 'Submit Notice',
//   variant: 'contained',
// };

// export const ResetPasswordButton = Template.bind({});
// ResetPasswordButton.args = {
//   children: 'Reset Password',
//   variant: 'contained',
// };

// export const ContinueButton = Template.bind({});
// ContinueButton.args = { children: 'Continue', variant: 'contained' };

// export const ExportFileButton = Template.bind({});
// ExportFileButton.args = {
//   children: 'Export',
//   variant: 'outlined',
//   startIcon: <Download />,
// };

export const PlushOneItemButton = Template.bind({});
PlushOneItemButton.args = {
  children: 'Manual Order',
  variant: 'contained',
  startIcon: <PlusOneOutlined />,
};

// export const SignInGoogleButton = Template.bind({});
// SignInGoogleButton.args = {
//   children: 'Sign In with Google',
//   variant: 'outlined',
//   startIcon: <Google />,
// };

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
