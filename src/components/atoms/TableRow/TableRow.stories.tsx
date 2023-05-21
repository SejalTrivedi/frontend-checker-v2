import React from 'react';
import { Meta, StoryObj, Story } from '@storybook/react';
import { TableRow, TableRowProps } from './TableRow';

const meta = {
  title: 'Components/Atoms/TableRow',
  component: TableRow,
} satisfies Meta<typeof TableRow>;

export default meta;
// type Story = StoryObj<typeof meta>;

const Template: Story<TableRowProps> = (args) => (
  <TableRow {...args} />
);

export const SampleTableRow = Template.bind({});
SampleTableRow.args = {};
