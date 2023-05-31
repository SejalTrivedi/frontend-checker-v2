import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Accordion, AccordionProps } from './Accordion';
import { Typography } from '@mui/material';

const meta = {
  title: 'Components/Atoms/Accordion',
  component: Accordion,
} satisfies Meta<typeof Accordion>;

export default meta;

const Template: StoryFn<AccordionProps> = (args) => (
  <Accordion {...args} />
);

export const SampleAccordion = Template.bind({});
SampleAccordion.args = {
  title: 'Sample Summery Tile',
  accordionDetails: <Typography>Sample according details</Typography>,
};
