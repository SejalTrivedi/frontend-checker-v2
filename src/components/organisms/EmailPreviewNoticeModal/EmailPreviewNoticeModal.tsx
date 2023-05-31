import * as React from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

export interface EmailPreviewNoticeModalProps {
  openButtonName: string;
  modalTitle: string;
  modalContent: React.ReactElement;
  modalSubmitButtonName: string;
  candidateData?: any;
}

export const EmailPreviewNoticeModal = ({
  ...props
}: EmailPreviewNoticeModalProps) => {
  const [mainModalOpen, setMainModalOpen] = React.useState(false);

  const mainModalHandleClickOpen = () => {
    setMainModalOpen(true);
  };
  const mainModalHandleClose = () => {
    setMainModalOpen(false);
  };

  const mainModalHandleSubmit = () => {
    async function fetchData() {
      try {
        props.candidateData['adjudication'] = 'Adverse Action';
        await axios.put(
          `http://localhost:3000/candidate/${props.candidateData['id']}`,
          props.candidateData
        );
        // Handle the success case
      } catch (error) {
        // Handle the error case
      }
    }
    fetchData()
      .then(() => {
        // Handle the successful resolution
        window.location.href = '/candidates';
      })
      .catch((error) => {
        // Handle the error
        console.log(error);
      });
  };

  return (
    <div>
      <Button variant="outlined" onClick={mainModalHandleClickOpen}>
        {props.openButtonName}
      </Button>

      <BootstrapDialog
        onClose={mainModalHandleClose}
        aria-labelledby="customized-dialog-title"
        open={mainModalOpen}
      >
        <div>
          <BootstrapDialogTitle
            id="customized-dialog-title"
            onClose={mainModalHandleClose}
          >
            {props.modalTitle}
          </BootstrapDialogTitle>
          <DialogContent dividers>{props.modalContent}</DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              autoFocus
              onClick={mainModalHandleSubmit}
            >
              {props.modalSubmitButtonName}
            </Button>
          </DialogActions>
        </div>
      </BootstrapDialog>
    </div>
  );
};
