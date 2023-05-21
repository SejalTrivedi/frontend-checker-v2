import React from 'react';
import { Meta, StoryObj, Story } from '@storybook/react';
import {
  AccordionControl,
  AccordionControlProps,
} from './AccordionControl';

const meta = {
  title: 'Components/Molecules/AccordionControl',
  component: AccordionControl,
} satisfies Meta<typeof AccordionControl>;

export default meta;
// type Story = StoryObj<typeof meta>;

const Template: Story<AccordionControlProps> = (args) => (
  <AccordionControl {...args} />
);

export const SampleAccordionControl = Template.bind({});
SampleAccordionControl.args = {};
