import { Typography, Divider, Card, Paper } from '@mui/material';
import { Stack } from '@mui/system';
import AttachmentIcon from '@mui/icons-material/Attachment';

export type EmailNoticeProps = {
  candidateName?: string;
  candidateEmail?: string;
  candidateCharges?: React.ReactElement;
  selectedCharges?: string[] | [] | undefined;
  regularPreviewFlag: boolean;
  attachments?: string[] | [];
};

export const EmailNoticeTemplate = ({
  ...props
}: EmailNoticeProps) => {
  console.log('attachments ', props.attachments);
  return (
    <>
      <Typography className={props.regularPreviewFlag ? 'p-b-20 p-t-20' : 'p-b-5 p-t-5'}>
        <span className="mail-labels">From:</span>{' '}
        <span className="mail-values">kyle@checkr.com</span>
      </Typography>
      {props.regularPreviewFlag ? <Divider /> : null}
      <Typography className={props.regularPreviewFlag ? 'p-b-20 p-t-20' : 'p-b-5 p-t-5'}>
        <span className="mail-labels">To:</span>{' '}
        <span className="mail-values">{props.candidateEmail}</span>
      </Typography>
      {props.regularPreviewFlag ? <Divider /> : null}
      <Typography className={props.regularPreviewFlag ? 'p-b-20 p-t-20' : 'p-b-5 p-t-5'}>
        <span className="mail-labels">Subject:</span>{' '}
        <span className="mail-values">
          Pre-adverse action notice - checkr-bpo
        </span>
      </Typography>
      {props.regularPreviewFlag ? null : (
        <Paper elevation={0}>
          <Card
            sx={{
              backgroundColor: '#FCE5EA',
              boxShadow: 'unset'
            }}
          >
            <ul
              style={{
                color: '#994D5B',
              }}
            >
              <li>
                Please carefully review the list of charges (in bold)
                and your contact information.
              </li>
              <li>
                Please note that we will send the corresponding post
                adverse action email automatically after 7 days.
              </li>
            </ul>
          </Card>
        </Paper>
      )}
      {props.regularPreviewFlag ? <Divider /> : null}
      <div>
        <Typography className="mail-body-1 p-t-20">
          Dear {props.candidateName}
        </Typography>
        <Typography className="mail-body-1 p-t-20">
          You recently authorized checkr-bpo (“the company”) to obtain
          consumer reports and/or investigate consumer reports
        </Typography>
        <Typography className="mail-body-1">
          about you from a consumer reporting agency. The Company is
          considering taking action in whole or in past on
        </Typography>
        <Typography className="mail-body-1">
          information in such report(s) including the following
          specific items identified in the report prepared by Checkr,
          Inc.
        </Typography>
        <Stack>
          {props.candidateCharges ? (
            <div
              style={{
                margin: '15px 0px 0px 0px',
              }}
            >
              <Typography fontWeight={'10px'}>
                Select the charges for the pre adverse action
              </Typography>
              {props.candidateCharges}
            </div>
          ) : null}

          {props.selectedCharges ? (
            <ul
              style={{
                margin: '15px 0px 0px 0px',
              }}
            >
              {props.selectedCharges.map((chargeName) => {
                return (
                  <li>
                    <Typography>{chargeName}</Typography>
                  </li>
                );
              })}
            </ul>
          ) : (
            []
          )}
        </Stack>
        <Typography className="mail-body-1 p-t-20">
          If you wish to dispute the accuracy of the information in
          the report directly with the consumer reporting agency
          (i.e.,
        </Typography>
        <Typography className="mail-body-1 ">
          the source of the information contained in the report), you
          should contact the agency identified above directly.
        </Typography>
        <Typography className="mail-body-1 p-t-20">
          Sincerely{' '}
        </Typography>
        <Typography className="mail-body-1 p-b-20">
          Checkr-bpo |
        </Typography>
        {props.attachments ?
          <div>
            <span className='mail-labels'>Attachments</span>
            {props.attachments?.map((value) => {
              return (
                <Typography><AttachmentIcon /><span className='mail-attachment p-l-5'>{value}</span></Typography>
              )
            })}
          </div>
          : null}
      </div>
    </>
  );
};
