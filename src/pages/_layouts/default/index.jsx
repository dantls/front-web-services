import React from 'react';
import { ChangeStatusModal } from '../../../components/ChangeStatusModal';
import { Header } from '../../../components/Header';
import { NewServiceModal1 } from '../../../components/NewServiceModal1';
import { NewServiceModal2 } from '../../../components/NewServiceModal2';
import { useChangeStatusModal } from '../../../hooks/changeStatus';
import { useNewServiceModal2 } from '../../../hooks/newService2';
import { useNewServiceModal1 } from '../../../hooks/newService1';

export default function DefaultLayout({ children }) {

  const {isChangeStatusModalOpen,handleCloseChangeStatusModal} = useChangeStatusModal();
  const {isNewServiceModalOpen1,handleCloseNewServiceModal1, handleOpenNewServiceModal1} = useNewServiceModal1();
  const {isNewServiceModalOpen2,handleCloseNewServiceModal2} = useNewServiceModal2();

  return (
    <>
      <Header openModal={handleOpenNewServiceModal1}  />

      <NewServiceModal1 
        isOpen={isNewServiceModalOpen1}
        onRequestClose={handleCloseNewServiceModal1}
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