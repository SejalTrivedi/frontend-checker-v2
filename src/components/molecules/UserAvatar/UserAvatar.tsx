import * as React from 'react';
import { Stack, Typography } from '@mui/material';
import { Avatar as UserAvatar } from '../../atoms/Avatar/Avatar';
import { Button } from '../../atoms/Button/Button';
import { LoginOutlined } from '@mui/icons-material';

export type UserAvatarProps = {
  userName: string;
  userAvatarSrc?: string;
};

export const UserAvatarMolecule: React.FC<UserAvatarProps> = ({
  ...props
}) => {
  return (
    <Stack direction="row" spacing={1}>
      <UserAvatar
        src={props.userAvatarSrc}
        sx={{ width: 50, height: 50 }}
      />
      <Typography mb={2} maxWidth={400} lineHeight="lg">
        {props.userName}
      </Typography>
      <Button startIcon={<LoginOutlined></LoginOutlined>} />
    </Stack>
  );
};
