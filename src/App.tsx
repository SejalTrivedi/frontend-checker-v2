import React, { useState } from 'react';
import logo from './logo.svg';
import {
  LeftNavBar,
  LeftNavBarProps,
} from './components/organisms/NavBar/NavBar';
import { Content } from './components/organisms/Content/Content';
import './App.css';
import { Card } from '@mui/material';

function App() {
  // const [color, setColor] = useState<ButtonProps['color']>('primary');
  // const [variant, setVariant] =
  //   useState<ButtonProps['variant']>('text');
  // const [size, setSize] = useState<ButtonProps['size']>('small');

  // const customizeMe = () => {
  //   console.log('clicked');
  //   setColor('secondary');
  //   setVariant('contained');
  //   setSize('large');
  // };

  return (
    <div className="App-header">
      <Card
        variant="outlined"
        color="blue"
        sx={{
          width: 320,
          gap: 2,
          '&:hover': {
            boxShadow: 'md',
            borderColor: 'neutral.outlinedHoverBorder',
          },
        }}
      >
        <LeftNavBar></LeftNavBar>
        {/* <Content></Content> */}
      </Card>
    </div>
  );
}

export default App;
