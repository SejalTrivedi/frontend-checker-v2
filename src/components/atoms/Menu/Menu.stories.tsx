import { Meta, StoryFn } from '@storybook/react';
import { Menu, MenuProps } from './Menu';
import Dashboard from '../../../../public/assets/Icons/Dashboard.png';

const meta = {
  title: 'Components/Atoms/Menu',
  component: Menu,
} satisfies Meta<typeof Menu>;

export default meta;

const Template: StoryFn<MenuProps> = (args) => <Menu {...args} />;

export const SampleMenu = Template.bind({});
SampleMenu.args = {
  menuName: 'Home',
  menuIcon: <img src={Dashboard} />,
};
