import React, { useState } from 'react';
import {
  Checkbox as MuiCheckbox,
  CheckboxProps as MuiCheckBoxProps,
} from '@mui/material';

export interface CheckboxProps extends MuiCheckBoxProps {
  label?: string | null;
}

export const Checkbox: React.FC<CheckboxProps> = ({ ...props }) => {
  const [checked, setChecked] = useState(false);
  props.label = props.label ? props.label : 'Check me';
  props['aria-label'] = props.label;
  const getCheckedState = () => {
    setChecked(!checked);
  };
  return (
    <MuiCheckbox
      {...props}
      checked={checked}
      onClick={getCheckedState}
    ></MuiCheckbox>
  );
};
