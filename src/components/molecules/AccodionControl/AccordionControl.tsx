import * as React from 'react';
import { Accordion } from '../../atoms/Accordion/Accordion';
import { demoTableStoryRows } from '../../data/data';

import { Table } from '../Table/Table';
import { Typography } from '@mui/material';

export type AccordionControlProps = {};

export const AccordionControl: React.FC<AccordionControlProps> = ({
  ...props
}) => {
  return (
    <>
      <Accordion
        title="Title 1"
        accordionDetails={
          <Table
            dataRows={demoTableStoryRows}
            sequenceColumn={[
              'name',
              'adjudication',
              'status',
              'date',
              'location',
            ]}
          ></Table>
        }
      ></Accordion>
      <Accordion
        title="Title 1"
        accordionDetails={
          <Typography> Hello there, How are you ? </Typography>
        }
      ></Accordion>
    </>
  );
};
