import React from 'react';
import {
  Checkbox as MuiCheckbox,
  CheckboxProps as MuiCheckBoxProps,
} from '@mui/material';

export interface CheckboxProps extends MuiCheckBoxProps {}

export const Checkbox: React.FC<CheckboxProps> = ({ ...props }) => {
  return <MuiCheckbox {...props}></MuiCheckbox>;
};
