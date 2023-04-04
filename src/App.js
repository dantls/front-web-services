import React from 'react';

import GlobalStyle from './styles/global';
import Routes from './routes'
import { BrowserRouter } from 'react-router-dom';
import { Shipment } from './pages/Shipment';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Shipment />
      {/* <Routes /> */}
    </BrowserRouter>
  );
}

export default App;
