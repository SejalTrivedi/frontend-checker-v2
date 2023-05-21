import React, { ChangeEvent } from 'react';
import { Select, MenuItem } from '@mui/material';

export type SelectFieldProps = {
  options: string[];
  value: string;
};

export const SelectField: React.FC<SelectFieldProps> = ({
  options,
  value,
}) => {
  return (
    <Select value={value}>
      {options.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </Select>
  );
};
