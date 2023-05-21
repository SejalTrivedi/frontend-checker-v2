import React from 'react';
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@mui/material';

export interface ButtonProps extends MuiButtonProps {
  startIcon?: React.ReactElement;
}

export const Button: React.FC<ButtonProps> = ({ ...props }) => {
  return <MuiButton {...props}></MuiButton>;
};
