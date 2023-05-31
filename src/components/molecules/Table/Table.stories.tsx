import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Table, TableProps } from './Table';

const meta = {
  title: 'Components/Molecules/Table',
  component: Table,
} satisfies Meta<typeof Table>;

export default meta;

const Template: StoryFn<TableProps> = (args) => <Table {...args} />;

export const SampleTable = Template.bind({});
SampleTable.args = {};
