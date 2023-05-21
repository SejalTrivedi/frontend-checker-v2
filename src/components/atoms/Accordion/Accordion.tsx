import React, { ChangeEvent, useState } from 'react';
import {
  Accordion as MUIAccordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

export interface AccordionProps {
  title?: string;
  accordionDetails?: React.ReactElement;
  expanded?: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({
  title,
  accordionDetails,
  expanded,
  ...props
}) => {
  return (
    <MUIAccordion expanded={expanded}>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="accordion-content"
        id="accordion-header"
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>{accordionDetails}</AccordionDetails>
    </MUIAccordion>
  );
};
