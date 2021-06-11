import React,{useState} from 'react';

import GlobalStyle from './styles/global';
// import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import { Header } from './components/Header';
import {  NewServiceModal  } from './components/NewServiceModal';
import { ServicesProvider } from './ServicesContext';

function App() {
  const [isNewServiceModalOpen, setIsNewServiceModalOpen] = useState(false);

  function handleOpenNewServiceModal(){
    setIsNewServiceModalOpen(true);
  }
  function handleCloseNewServiceModal(){
    setIsNewServiceModalOpen(false);
  }

  return (
    <ServicesProvider>
      <Header openModal={handleOpenNewServiceModal}  />
      <Dashboard />

      <GlobalStyle />
      <NewServiceModal 
        isOpen={isNewServiceModalOpen}
        onRequestClose={handleCloseNewServiceModal}
      />
    </ServicesProvider>
  );
}

export default App;
