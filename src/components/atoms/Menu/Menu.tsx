import React, { ReactElement } from 'react';
import {
  ListItem,
  ListItemIcon,
  ListItemButton,
  ListItemText,
} from '@mui/material';

export type MenuProps = {
  menuName: string;
  menuIcon: ReactElement;
};

export const Menu: React.FC<MenuProps> = ({ ...props }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon color="primary">{props.menuIcon}</ListItemIcon>
        <ListItemText color="primary">{props.menuName}</ListItemText>
      </ListItemButton>
    </ListItem>
  );
};
