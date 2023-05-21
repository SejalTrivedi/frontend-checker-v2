import React from 'react';
import { Stack, Box } from '@mui/material';

import {
  HomeOutlined,
  GavelOutlined,
  PeopleAltOutlined,
  AnalyticsOutlined,
  AccountBoxOutlined,
  ArticleOutlined,
  NoteAltOutlined,
} from '@mui/icons-material';

import { Menu, MenuProps } from '../../atoms/Menu/Menu';

export type MenuListProps = {};

export const MenuList: React.FC<MenuListProps> = ({ ...props }) => {
  const nav_bar_list_property = [
    { menuName: 'Home', menuIcon: <HomeOutlined /> },
    { menuName: 'Candidates', menuIcon: <PeopleAltOutlined /> },
    { menuName: 'Adverse_Actions', menuIcon: <GavelOutlined /> },
    { menuName: 'Logs', menuIcon: <ArticleOutlined /> },
    { menuName: 'Analytics', menuIcon: <AnalyticsOutlined /> },
    { menuName: 'Account', menuIcon: <AccountBoxOutlined /> },
    { menuName: 'Screenings', menuIcon: <NoteAltOutlined /> },
  ];

  return (
    <Stack>
      {nav_bar_list_property.map((menu) => {
        return (
          <Menu
            menuIcon={menu.menuIcon}
            menuName={menu.menuName}
          ></Menu>
        );
      })}
    </Stack>
  );
};
