import React, { ReactElement } from 'react';
import {
  ListItem,
  ListItemIcon,
  ListItemButton,
  ListItemText,
  createMuiTheme,
  makeStyles,
} from '@mui/material';

export type MenuProps = {
  menuName: string;
  menuIcon: ReactElement;
};

const active = {
  background: '#EFF2FF',
  '@media (hover: none)': {
    '&:hover': {
      backgroundColor: '#EFF2FF',
    },
  },
}

export const Menu: React.FC<MenuProps> = ({ ...props }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton classes={active}>
        <ListItemIcon color="primary">{props.menuIcon}</ListItemIcon>
        <ListItemText color="primary">{props.menuName}</ListItemText>
      </ListItemButton>
    </ListItem>
  );
};
