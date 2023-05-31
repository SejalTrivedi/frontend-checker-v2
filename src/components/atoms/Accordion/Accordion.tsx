import {
  Accordion as MUIAccordion,
  AccordionProps as MuiAccordionProps,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Divider,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

export interface AccordionProps extends MuiAccordionProps {
  accordionDetails?: React.ReactElement;
}

export const Accordion: React.FC<AccordionProps> = ({
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
        <Typography>{props.children}</Typography>
      </AccordionSummary>
      <Divider></Divider>
      <AccordionDetails>{accordionDetails}</AccordionDetails>
    </MUIAccordion>
  );
};
