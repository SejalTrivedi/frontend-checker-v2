import React from 'react';
import { Meta, StoryObj, Story } from '@storybook/react';
import { Link, LinkProps } from './Link';

const meta = {
  title: 'Components/Atoms/Link',
  component: Link,
} satisfies Meta<typeof Link>;

export default meta;
// type Story = StoryObj<typeof meta>;

const Template: Story<LinkProps> = (args) => <Link {...args} />;

export const SampleLink = Template.bind({});
SampleLink.args = {
  href: '#href',
  underline: 'always',
  variant: 'body2',
  color: 'primary',
  displayValue: 'I am Linkkk',
};
