import React from 'react';
import { Meta, StoryObj, Story } from '@storybook/react';
import { UserAvatarMolecule, UserAvatarProps } from './UserAvatar';

const meta = {
  title: 'Components/Molecules/UserAvatar',
  component: UserAvatarMolecule,
} satisfies Meta<typeof UserAvatarMolecule>;

export default meta;
// type Story = StoryObj<typeof meta>;

const Template: Story<UserAvatarProps> = (args) => (
  <UserAvatarMolecule {...args} />
);

export const SampleUserAvatar = Template.bind({});
SampleUserAvatar.args = {};
