import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { MenuList, MenuListProps } from './MenuList';

const meta = {
  title: 'Components/Organisms/MenuList',
  component: MenuList,
} satisfies Meta<typeof MenuList>;

export default meta;

const Template: StoryFn<MenuListProps> = (args) => (
  <MenuList {...args} />
);

export const SampleMenuList = Template.bind({});
SampleMenuList.args = {};
