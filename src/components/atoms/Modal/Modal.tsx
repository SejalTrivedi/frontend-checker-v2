import React from 'react';
import {
  Modal as MuiModal,
  ModalProps as MuiModalProps,
  Box,
} from '@mui/material';

export interface ModalProps extends MuiModalProps {
  component?: React.ReactElement;
}

export const Modal: React.FC<ModalProps> = ({ ...props }) => {
  return (
    <MuiModal
      aria-labelledby="child-modal-title"
      aria-describedby="child-modal-description"
      {...props}
    ></MuiModal>
  );
};
