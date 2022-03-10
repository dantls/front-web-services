import React, {useState} from 'react';
import { ChangeStatusModal } from '../../../components/ChangeStatusModal';
import { Header } from '../../../components/Header';
import { NewServiceModal } from '../../../components/NewServiceModal';
import { useChangeStatusModal } from '../../../hooks/useChangeStatusModal';

export default function DefaultLayout({ children }) {
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

      <NewServiceModal 
        isOpen={isNewServiceModalOpen}
        onRequestClose={handleCloseNewServiceModal}
      />
      <ChangeStatusModal 
        isOpen={isChangeStatusModalOpen}
        onRequestClose={handleCloseChangeStatusModal}
      />
      {children}
    </>
  )
}