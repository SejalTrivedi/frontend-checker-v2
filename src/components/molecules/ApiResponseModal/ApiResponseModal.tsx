import { Modal, ModalProps } from '@mui/material';
import React from 'react';

export interface ApiResponseModalProps extends ModalProps {
  startIcon?: React.ReactElement;
}

export const ApiResponseModal: React.FC<ApiResponseModalProps> = ({
  ...props
}) => {
  return <Modal {...props}></Modal>;
};
