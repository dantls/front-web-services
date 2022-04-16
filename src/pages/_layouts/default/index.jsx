import React, {useState} from 'react';
import { ChangeStatusModal } from '../../../components/ChangeStatusModal';
import { Header } from '../../../components/Header';
import { NewServiceModal } from '../../../components/NewServiceModal';
import { NewServiceModal2 } from '../../../components/NewServiceModal2';
import { useChangeStatusModal } from '../../../hooks/changeStatus';
import { useNewServiceModal } from '../../../hooks/newService';

export default function DefaultLayout({ children }) {
  const [isNewServiceModalOpen, setIsNewServiceModalOpen] = useState(false);

  const {isChangeStatusModalOpen,handleCloseChangeStatusModal} = useChangeStatusModal();
  const {isNewServiceModalOpen2,handleCloseNewServiceModal2} = useNewServiceModal();

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
      <NewServiceModal2 
        isOpen={isNewServiceModalOpen2}
        onRequestClose={handleCloseNewServiceModal2}
      />
      <ChangeStatusModal 
        isOpen={isChangeStatusModalOpen}
        onRequestClose={handleCloseChangeStatusModal}
      />
      {children}
    </>
  )
}