import React from 'react';
import {
  Avatar as MuiAvatar,
  AvatarProps as MuiAvatarProps,
} from '@mui/material';

export interface AvatarProps extends MuiAvatarProps {}

export const Avatar: React.FC<AvatarProps> = ({ ...props }) => {
  return <MuiAvatar {...props}></MuiAvatar>;
};
