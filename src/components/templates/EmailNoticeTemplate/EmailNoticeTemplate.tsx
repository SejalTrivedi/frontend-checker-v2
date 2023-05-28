import { Typography, Divider } from '@mui/material';
import { Stack } from '@mui/system';
import {
  Checkbox,
  CheckboxProps,
} from '../../atoms/CheckBox/CheckBox';

export type EmailNoticeProps = {
  candidateName?: string;
  candidateEmail?: string;
  candidateCharges?: React.ReactElement;
  selectedCharges?: string[] | [] | undefined;
};

export const EmailNoticeTemplate = ({
  ...props
}: EmailNoticeProps) => {
  return (
    <>
      <Typography className='p-b-10 p-t-10'>
        <span className="mail-labels">From:</span> <span className='mail-values'>kyle@checkr.com</span>
      </Typography>
      <Divider></Divider>
      <Typography className='p-b-10 p-t-10'>
        <span className="mail-labels">To:</span> <span className='mail-values'>{props.candidateEmail}</span>
      </Typography>
      <Divider></Divider>
      <Typography className='p-b-10 p-t-10'>
        <span className="mail-labels">Subject:</span> <span className='mail-values'>Pre-adverse action notice - checkr-bpo</span>
      </Typography>
      <Divider></Divider>
      <Typography className="mail-body-1">
        Dear {props.candidateName}
      </Typography>
      <Typography className="mail-body-1">
        You recently authorized checkr-bpo (“the company”) to obtain
        consumer reports and/or investigate consumer reports about you
        from a consumer reporting agency. The Company is considering
        taking action in whole or in past on information in such
        report(s) including the following specific items identified in
        the report prepared by Checkr, Inc.
      </Typography>
      <Stack>
        {props.candidateCharges ? props.candidateCharges : null}
        {props.selectedCharges?.map((chargeName) => {
          return (
            <>
              <Stack direction={'row'}>
                <Typography>{chargeName}</Typography>
              </Stack>
            </>
          );
        })}
      </Stack>
      <Typography className="mail-body-2">
        If you wish to dispute the accuracy of the information in the
        report directly with the consumer reporting agency (i.e., the
        source of the information contained in the report), you should
        contact the agency identified above directly.
      </Typography>
      <Typography className="mail-body-2">Sincerely </Typography>
      <Typography className="mail-body-2 p-b-50">Checkr-bpo |</Typography>
    </>
  );
};
