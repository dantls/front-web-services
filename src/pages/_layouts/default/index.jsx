import React from 'react';
import { ChangeStatusModal } from '../../../components/ChangeStatusModal';
import { ChangeStatusModal2 } from '../../../components/ChangeStatusModal2';
import { BarcodeModal } from '../../../components/BarcodeModal';
import { Header } from '../../../components/Header';
import { NewServiceModal1 } from '../../../components/NewServiceModal1';
import { NewServiceModal2 } from '../../../components/NewServiceModal2';
import { useChangeStatusModal } from '../../../hooks/changeStatus';
import { useChangeStatusModal2 } from '../../../hooks/changeStatus2';
import { useBarcodeModal } from '../../../hooks/barcode';
import { useNewServiceModal2 } from '../../../hooks/newService2';
import { useNewServiceModal1 } from '../../../hooks/newService1';

export default function DefaultLayout({ children }) {

  const {isChangeStatusModalOpen,handleCloseChangeStatusModal} = useChangeStatusModal();
  const {isChangeStatusModalOpen2,handleCloseChangeStatusModal2} = useChangeStatusModal2();
  const {isBarcodeModalOpen,handleCloseBarcodeModal} = useBarcodeModal();
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
      <ChangeStatusModal2
        isOpen={isChangeStatusModalOpen2}
        onRequestClose={handleCloseChangeStatusModal2}
      />
      <BarcodeModal
        isOpen={isBarcodeModalOpen}
        onRequestClose={handleCloseBarcodeModal}
      />
      {children}
    </>
  )
}