import React,{useState} from 'react';

import GlobalStyle from './styles/global';
import Home from './pages/Home';
import { Header } from './components/Header';
import {  ModalExample  } from './components/ModalExample';

function App() {
  const [isNewServiceModalOpen, setIsNewServiceModalOpen] = useState(false);

  function handleOpenNewServiceModal(){
    setIsNewServiceModalOpen(true);
  }
  function handleCloseNewServiceModal(){
    setIsNewServiceModalOpen(false);
  }

  return (
    <>
      <Header openModal={handleOpenNewServiceModal}  />

      <GlobalStyle />
      <ModalExample 
        isOpen={isNewServiceModalOpen}
        onRequestClose={handleCloseNewServiceModal}
      />
      <Home />
    </>
  );
}

export default App;
