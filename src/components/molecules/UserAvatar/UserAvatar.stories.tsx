import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { UserAvatarMolecule, UserAvatarProps } from './UserAvatar';

const meta = {
  title: 'Components/Molecules/UserAvatar',
  component: UserAvatarMolecule,
} satisfies Meta<typeof UserAvatarMolecule>;

export default meta;

const Template: StoryFn<UserAvatarProps> = (args) => (
  <UserAvatarMolecule {...args} />
);

export const SampleUserAvatar = Template.bind({});
SampleUserAvatar.args = {};
