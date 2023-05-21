import React from 'react';
import {
  Link as MuiLink,
  LinkProps as MuiLinkProps,
} from '@mui/material';

export interface LinkProps extends MuiLinkProps {
  href: string;
  displayValue: string;
}

export const Link: React.FC<LinkProps> = ({ ...props }) => {
  return <MuiLink {...props}>{props.displayValue}</MuiLink>;
};
