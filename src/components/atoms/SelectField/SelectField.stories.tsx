// import React from 'react';
// import { Select, SelectProps } from './Select';
// import { Meta, Story } from '@storybook/react';

// const meta = {
//   title: 'Components/Atoms/Select',
//   component: Select,
// } satisfies Meta<typeof Select>;

// // export default meta;

// const Template: Story<SelectProps> = (args) => (
//   <Select {...args}></Select>
// );

// // export const FilterSelect = Template.bind({});
// // FilterSelect.args = {};

// export const Default = Template.bind({});
// Default.args = {
//   options: ['Option 1', 'Option 2', 'Option 3'],
//   value: 'Option 1',
//   onChange: (value: string) => {
//     console.log('Selected value:', value);
//   },
// };

import React from 'react';
import { Story, Meta } from '@storybook/react';
import { SelectField, SelectFieldProps } from './SelectField';

export default {
  title: 'Components/Atoms/SelectField',
  component: SelectField,
} as Meta;

const Template: Story<SelectFieldProps> = (args) => (
  <SelectField {...args} />
);

export const Default = Template.bind({});
Default.args = {
  options: ['Option 1', 'Option 2', 'Option 3'],
  value: 'Option 1',
  //   onChange: (value: string) => {
  //     console.log('Selected value:', value);
  //   },
};
