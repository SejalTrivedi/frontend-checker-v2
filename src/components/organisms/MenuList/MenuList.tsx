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
import { Link } from 'react-router-dom';

export type MenuListProps = {};

export const MenuList: React.FC<MenuListProps> = ({ ...props }) => {
  const nav_bar_list_property = [
    {
      redirectTo: '/',
      menuName: 'Home',
      menuIcon: <HomeOutlined />,
    },
    {
      redirectTo: '/candidates',
      menuName: 'Candidates',
      menuIcon: <PeopleAltOutlined />,
    },
    {
      redirectTo: '/',
      menuName: 'Adverse_Actions',
      menuIcon: <GavelOutlined />,
    },
    {
      redirectTo: '/',
      menuName: 'Logs',
      menuIcon: <ArticleOutlined />,
    },
    {
      redirectTo: '/',
      menuName: 'Analytics',
      menuIcon: <AnalyticsOutlined />,
    },
    {
      redirectTo: '/',
      menuName: 'Account',
      menuIcon: <AccountBoxOutlined />,
    },
    {
      redirectTo: '/',
      menuName: 'Screenings',
      menuIcon: <NoteAltOutlined />,
    },
  ];

  return (
    <Stack>
      {nav_bar_list_property.map((menu) => {
        return (
          <Link to={menu.redirectTo} className='text-decoration-none'>
            <Menu
              key={menu.menuName}
              menuIcon={menu.menuIcon}
              menuName={menu.menuName}
            ></Menu>
          </Link>
        );
      })}
    </Stack>
  );
};
