import React from 'react';
import { Meta, StoryObj, Story } from '@storybook/react';
import { Table, TableProps } from './Table';

const meta = {
  title: 'Components/Molecules/Table',
  component: Table,
} satisfies Meta<typeof Table>;

export default meta;
// type Story = StoryObj<typeof meta>;

const Template: Story<TableProps> = (args) => <Table {...args} />;

export const SampleTable = Template.bind({});
SampleTable.args = {};
