import React from 'react';

import GlobalStyle from './styles/global';
import Routes from './routes'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
