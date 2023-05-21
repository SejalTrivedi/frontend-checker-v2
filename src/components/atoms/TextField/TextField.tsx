import React from 'react';
import {
  TextField as MuiTextField,
  BaseTextFieldProps as MuiTextFieldProps,
} from '@mui/material';

export interface BaseTextFieldProps extends MuiTextFieldProps {}

export const TextField: React.FC<BaseTextFieldProps> = ({
  ...props
}) => {
  return <MuiTextField {...props}></MuiTextField>;
};
