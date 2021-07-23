import React,{useState} from 'react';

import GlobalStyle from './styles/global';
import { Header } from './components/Header';
import { NewServiceModal } from './components/NewServiceModal';
import { ServicesProvider } from './ServicesContext';
import Routes from './routes';

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

      <GlobalStyle />
      <NewServiceModal 
        isOpen={isNewServiceModalOpen}
        onRequestClose={handleCloseNewServiceModal}
      />
      <Routes />
    </ServicesProvider>
  );
}

export default App;
