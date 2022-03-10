import { useState } from 'react';
import { Board } from '../../components/Board';
import { ChangeStatusModal } from '../../components/ChangeStatusModal';
import { Header } from '../../components/Header';
import { NewServiceModal } from '../../components/NewServiceModal';
import { useChangeStatusModal } from '../../hooks/useChangeStatusModal';
import { useServices } from '../../hooks/useServices';
import {Container} from './styles';


export function Dashboard() {
  const {addresses} = useServices();
  const [isNewServiceModalOpen, setIsNewServiceModalOpen] = useState(false);

  const {isChangeStatusModalOpen,handleCloseChangeStatusModal} = useChangeStatusModal();

  function handleOpenNewServiceModal(){
    setIsNewServiceModalOpen(true);
  }
  function handleCloseNewServiceModal(){
    setIsNewServiceModalOpen(false);
  }

  return (
    <Container>
      <Header openModal={handleOpenNewServiceModal}  />

      <Board
        addresses={addresses}
      />
      <NewServiceModal 
        isOpen={isNewServiceModalOpen}
        onRequestClose={handleCloseNewServiceModal}
      />
      <ChangeStatusModal
        isOpen={isChangeStatusModalOpen}
        onRequestClose={handleCloseChangeStatusModal}
      />
    </Container>
  );
}

