import React,{useState} from 'react';

import GlobalStyle from './styles/global';
import { Header } from './components/Header';
import { NewServiceModal } from './components/NewServiceModal';
import { ChangeStatusModal } from './components/ChangeStatusModal';
import Routes from './routes';


import { useChangeStatusModal } from './hooks/useChangeStatusModal';
function App() {
  const [isNewServiceModalOpen, setIsNewServiceModalOpen] = useState(false);

  const {isChangeStatusModalOpen,handleCloseChangeStatusModal} = useChangeStatusModal();

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
      <NewServiceModal 
        isOpen={isNewServiceModalOpen}
        onRequestClose={handleCloseNewServiceModal}
      />
      <ChangeStatusModal 
        isOpen={isChangeStatusModalOpen}
        onRequestClose={handleCloseChangeStatusModal}
      />
      <Routes />
    </>
  );
}

export default App;
