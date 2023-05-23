import { Outlet } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import {
  LeftNavBar,
  LeftNavBarProps,
} from '../organisms/NavBar/NavBar';
import { CssBaseline, AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';

export function RootLayout() {
  const drawerWidth = 240;
  
  const drawer = (
    <div>
      <LeftNavBar/>
    </div>
  );
  const container = window !== undefined ? () => window.document.body : undefined;

  return (
    <><Box sx={{ display: 'flex' }}>
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        container={container}
        variant="temporary"
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,
      },
        }}
      >
        {drawer}
      </Drawer>
      {/* side menu code */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,
          borderRight: 'none',
          backgroundColor: 'transparent' },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
    <Box
      component="main"
      sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }}}
    >
      <Outlet />
    </Box>
  </Box>
    {/* <aside>
      <LeftNavBar />
    </aside>
      <main>
        <Outlet />
      </main> */}
    </>
  );
}
