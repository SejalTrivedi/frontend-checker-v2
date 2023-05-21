import React from 'react';
import { Meta, StoryObj, Story } from '@storybook/react';
import { Login, LoginProps } from './Login';

const meta = {
  title: 'Components/Organisms/Login',
  component: Login,
} satisfies Meta<typeof Login>;

export default meta;
// type Story = StoryObj<typeof meta>;

const Template: Story<LoginProps> = (args) => <Login {...args} />;

export const SampleLogin = Template.bind({});
SampleLogin.args = {};
