import React from 'react';
import { Story, Meta } from '@storybook/react';
import { SearchBox, SearchBoxProps } from './SearchBox';

export default {
  title: 'Components/Molecules/SearchBox',
  component: SearchBox,
} as Meta;

const Template: Story<SearchBoxProps> = (args) => (
  <SearchBox {...args} />
);

export const demoSearchBox = Template.bind({});
demoSearchBox.args = {
  placeholder: 'Search...',
  onSearch: (query: string) => {
    console.log(`Searching for: ${query}`);
  },
};
