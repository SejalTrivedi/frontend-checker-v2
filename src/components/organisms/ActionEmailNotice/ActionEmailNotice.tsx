import React from 'react';
import { Divider, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { TextField } from '../../atoms/TextField/TextField';
import { Button } from '../../atoms/Button/Button';
import {
  HTMLPreview,
  HTMLPreviewProps,
} from '../../molecules/HtmlPreview/HtmlPreview';
import { EmailPreviewNoticeModal } from '../EmailPreviewNoticeModal/EmailPreviewNoticeModal';

export type ActionEmailNoticeProps = {
  from: string;
  to: string;
  subject: string;
  emailContent: string;
  autoSendEmailAfterDays: number;
};

export const ActionEmailNotice = ({
  ...props
}: ActionEmailNoticeProps) => {
  const textStyle = {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '12px',
    lineHeight: '18px',
    textTransform: 'capitalize',
    color: '#0A0B0D',
  };
  return (
    <Paper elevation={0}>
      <Grid>
        <Grid item>
          <Box>
            <Typography sx={textStyle}>From: {props.from}</Typography>
          </Box>
        </Grid>
        <Divider />
        <Grid item>
          <Box>
            <Typography sx={textStyle}>To: {props.to}</Typography>
          </Box>
        </Grid>
        <Divider />
        <Grid item>
          <Box>
            <Typography sx={textStyle}>
              Subject: {props.subject}
            </Typography>
          </Box>
        </Grid>
        <Divider />
        <Grid item>
          <Box sx={textStyle}>
            <HTMLPreview
              htmlContent={props.emailContent}
            ></HTMLPreview>
          </Box>
        </Grid>
        <Divider />
        <Grid item>
          <Grid
            container
            spacing={2}
            alignItems="center"
            sx={{
              borderRadius: '0px',
              background: '#FFFFFF',
              justifyContent: 'space-between',
            }}
          >
            <Grid container>
              <Grid lg={6} className="mail-footer">
                <Grid item>
                  <Typography className="text-end">
                    Auto send Post Adverse action
                  </Typography>
                </Grid>
                <Grid item>
                  <TextField className='mail-input'
                    value={props.autoSendEmailAfterDays}
                  ></TextField>
                </Grid>
                <Grid item>
                  <Typography className="text-end">Days</Typography>
                </Grid>
              </Grid>
              <Grid lg={6} item alignContent="right">
                <EmailPreviewNoticeModal
                  modalSubmitButtonName="Save me"
                  modalTitle="Sample Modal"
                  openButtonName="Open Modal"
                  modalContent={
                    <HTMLPreview
                      htmlContent={props.emailContent}
                    ></HTMLPreview>
                  }
                ></EmailPreviewNoticeModal>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};
