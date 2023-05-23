import * as React from 'react';
import { Box, List, ListItem, Divider } from '@mui/material';
import { Image } from '../../atoms/Image/Image';
import recruitImage from '../../../../public/assets/recruitImage.png';
import { UserAvatarMolecule } from '../../molecules/UserAvatar/UserAvatar';
import { MenuList } from '../MenuList/MenuList';

export type LeftNavBarProps = {};

export const LeftNavBar = ({ ...props }: LeftNavBarProps) => {
  return (
    <Box
      sx={{
        width: '240px',
        height: 'calc(100vh - 48px)',
        backgroundColor: '#FFFFFF',
        // top: '24px',
        // left: '30px',
        borderRadius: '8px',
        position: 'fixed',
        boxShadow: '0px 4px 28px 0px #2D2D2F1A',
        margin: '24px',
        borderRight: 'none',
      }}
    >
      {/* <nav> */}
        <Box
          sx={{
            height: 'calc(100vh - 115px)',
          }}
        >
          <List>
            <ListItem>
              <Image
                source={recruitImage}
                height="20px"
                width="120px"
                left="28px"
                top="28px"
                borderRadius="0px"
              />
            </ListItem>
            <ListItem sx={{textDecoration: 'none'}}>
              <MenuList></MenuList>
            </ListItem>
          </List>
        </Box>
        <Box>
          <Divider />
          <List style={{ margin: '0px 0px 0px 5px' }}>
            <UserAvatarMolecule></UserAvatarMolecule>
          </List>
        </Box>
      {/* </nav> */}
    </Box>
  );
};
