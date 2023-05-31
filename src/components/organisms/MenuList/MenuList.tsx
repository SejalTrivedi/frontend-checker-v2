import React from 'react';
import { Stack } from '@mui/material';
import { Menu } from '../../atoms/Menu/Menu';
import { Link } from 'react-router-dom';
import Dashboard from '../../../../public/assets/Icons/Dashboard.png';
import Account from '../../../../public/assets/Icons/Account.png';
import Analytics from '../../../../public/assets/Icons/Analytics.png';
import Contacts from '../../../../public/assets/Icons/Contacts.png';
import logs from '../../../../public/assets/Icons/logs.png';
import Screening from '../../../../public/assets/Icons/Screening.png';
import Vector from '../../../../public/assets/Icons/Vector.png';

export type MenuListProps = {};

export const MenuList: React.FC<MenuListProps> = ({ ...props }) => {
  const nav_bar_list_property = [
    {
      redirectTo: '/',
      menuName: 'Home',
      menuIcon: <img src={Dashboard} />,
    },
    {
      redirectTo: '/candidates',
      menuName: 'Candidates',
      menuIcon: <img src={Contacts} />,
    },
    {
      redirectTo: '/',
      menuName: 'Adverse Actions',
      menuIcon: <img src={Vector} />,
    },
    {
      redirectTo: '/',
      menuName: 'Logs',
      menuIcon: <img src={logs} />,
    },
    {
      redirectTo: '/',
      menuName: 'Analytics',
      menuIcon: <img src={Analytics} />,
    },
    {
      redirectTo: '/',
      menuName: 'Account',
      menuIcon: <img src={Account} />,
    },
    {
      redirectTo: '/',
      menuName: 'Screenings',
      menuIcon: <img src={Screening} />,
    },
  ];

  return (
    <Stack>
      {nav_bar_list_property.map((menu) => {
        return (
          <Link
            key={menu.menuName}
            to={menu.redirectTo}
            className="text-decoration-none"
          >
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
