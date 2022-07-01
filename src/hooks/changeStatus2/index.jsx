import React, {createContext, useState,useContext} from 'react';
import api from '../../services/api';
import { useDataStore } from '../../services/stores/dataStores';
import { useShipment2Services } from '../shipment2Service';

const ChangeStatusModalContext2 = createContext({});

export function ChangeStatusModalProvider2(props) {
  const { setSelectedData } = useDataStore();
  const {setList} = useShipment2Services();

  async function loadServices(){
    const response = await api.get('/list-services2');
    setList(response.data);
  }
  

  const [isChangeStatusModalOpen2, setIsChangeStatusModalOpen2] = useState(false);

  function handleOpenChangeStatusModal2(){
    setIsChangeStatusModalOpen2(true);
  }
  function handleCloseChangeStatusModal2(){
    setSelectedData(null)
    setIsChangeStatusModalOpen2(false);
    loadServices();
  }

  return (
    <ChangeStatusModalContext2.Provider value={{
      isChangeStatusModalOpen2,
      handleOpenChangeStatusModal2,
      handleCloseChangeStatusModal2
    }}>
      {props.children}
    </ChangeStatusModalContext2.Provider>
  )
}

export function useChangeStatusModal2(){
  const context = useContext(ChangeStatusModalContext2);

  return context;
}