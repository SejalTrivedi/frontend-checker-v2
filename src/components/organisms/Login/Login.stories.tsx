import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Login, LoginProps } from './Login';

const meta = {
  title: 'Components/Organisms/Login',
  component: Login,
} satisfies Meta<typeof Login>;

export default meta;

const Template: StoryFn<LoginProps> = (args) => <Login {...args} />;

export const SampleLogin = Template.bind({});
SampleLogin.args = {};
