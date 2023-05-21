import React from 'react';
import { Meta, StoryObj, Story } from '@storybook/react';
import { MenuList, MenuListProps } from './MenuList';

const meta = {
  title: 'Components/Organisms/MenuList',
  component: MenuList,
} satisfies Meta<typeof MenuList>;

export default meta;
// type Story = StoryObj<typeof meta>;

const Template: Story<MenuListProps> = (args) => (
  <MenuList {...args} />
);

export const SampleMenuList = Template.bind({});
SampleMenuList.args = {};
