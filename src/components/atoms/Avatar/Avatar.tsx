import React from 'react';
import {
  Avatar as MuiAvatar,
  AvatarProps as MuiAvatarProps,
} from '@mui/material';

export interface AvatarProps extends MuiAvatarProps {}

export const Avatar: React.FC<AvatarProps> = ({ ...props }) => {
  props.alt = props.alt ? props.alt : 'Avatar';
  props.src = props.src
    ? props.src
    : 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg';

  return <MuiAvatar {...props}></MuiAvatar>;
};
