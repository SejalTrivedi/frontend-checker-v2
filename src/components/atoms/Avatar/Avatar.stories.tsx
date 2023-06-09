import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Avatar, AvatarProps } from './Avatar';

const meta = {
  title: 'Components/Atoms/Avatar',
  component: Avatar,
} satisfies Meta<typeof Avatar>;

export default meta;

const Template: StoryFn<AvatarProps> = (args) => <Avatar {...args} />;
export const UserAvatar = Template.bind({});
UserAvatar.args = {
  src: 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png',
  alt: 'Default avatar',
};
