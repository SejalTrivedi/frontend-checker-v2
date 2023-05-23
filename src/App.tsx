import './App.css';
import { Card } from '@mui/material';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import { RootLayout } from './components/pages/Root';
import { CandidatePage } from './components/pages/Candidate';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [{ path: '/candidates', element: <CandidatePage /> }],
  },
]);

function App() {
  return (
    <div className="App-header">
      {/* <Card
        // variant="outlined"
        color="blue"
        sx={{
          // width: 320,
          gap: 2,
          '&:hover': {
            boxShadow: 'md',
            borderColor: 'neutral.outlinedHoverBorder',
          },
        }}
      > */}
        <RouterProvider router={router} />{' '}
      {/* </Card> */}
    </div>
  );
}

export default App;
