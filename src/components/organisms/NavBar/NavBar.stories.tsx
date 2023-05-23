import React from 'react';
import { Meta, StoryObj, Story } from '@storybook/react';
import { LeftNavBar, LeftNavBarProps } from './NavBar';

const meta = {
  title: 'Components/Organisms/LeftNavBar',
  component: LeftNavBar,
} satisfies Meta<typeof LeftNavBar>;

export default meta;

const Template: Story<LeftNavBarProps> = (args) => (
  <LeftNavBar {...args} />
);

export const SampleLeftNavBars = Template.bind({});
SampleLeftNavBars.args = {};
