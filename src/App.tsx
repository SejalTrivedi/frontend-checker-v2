import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import { RootLayout } from './components/pages/Root';
import { CandidatePage } from './components/pages/Candidate';
import { CandidateDetail } from './components/pages/CandidateDetail/CandidateDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/candidates', element: <CandidatePage /> },
      {
        path: '/candidate-detail/:id',
        element: (
          <CandidateDetail
            // candidateId={1}
            // candidateName="Jhon Smith"
          />
        ),
      },
    ],
  },
]);

function App() {
  return (
    <div className="App-header">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
