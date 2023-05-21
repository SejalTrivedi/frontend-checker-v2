import React from 'react';
import {
  Box,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { TextField } from '../../atoms/TextField/TextField';
import { SearchOutlined } from '@mui/icons-material';
import './searchbox.css';

export interface SearchBoxProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
}

export const SearchBox: React.FC<SearchBoxProps> = ({
  placeholder,
  onSearch,
}) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
      <OutlinedInput
        type="text"
        startAdornment={
          <InputAdornment position="start">
            <IconButton edge="start">
              <SearchOutlined />
            </IconButton>
          </InputAdornment>
        }
      />
    </Box>
  );
};
