import { Outlet } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import { LeftNavBar } from '../../organisms/NavBar/NavBar';
import { Box } from '@mui/system';

export function RootLayout() {
  const drawerWidth = 240;

  const drawer = (
    <div>
      <LeftNavBar />
    </div>
  );

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
                borderRight: 'none',
                backgroundColor: 'transparent',
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </>
  );
}
