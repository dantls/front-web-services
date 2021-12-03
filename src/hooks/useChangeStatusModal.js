import {createContext, useState,useContext} from 'react';
import api from '../services/api';
import { useDataStore } from '../services/stores/dataStores';
import {  useServices } from './useServices';
const ChangeStatusModalContext = createContext({});

export function ChangeStatusModalProvider(props) {
  const { setSelectedData } = useDataStore();

  const {setList} = useServices();

  async function loadServices(){
    const response = await api.get('/list-services');
    setList(response.data);
  }
  

  const [isChangeStatusModalOpen, setIsChangeStatusModalOpen] = useState(false);

  function handleOpenChangeStatusModal(){
    setIsChangeStatusModalOpen(true);
  }
  function handleCloseChangeStatusModal(){
    setSelectedData(null)
    setIsChangeStatusModalOpen(false);
    loadServices();
  }

  return (
    <ChangeStatusModalContext.Provider value={{
      isChangeStatusModalOpen,
      handleOpenChangeStatusModal,
      handleCloseChangeStatusModal
    }}>
      {props.children}
    </ChangeStatusModalContext.Provider>
  )
}

export function useChangeStatusModal(){
  const context = useContext(ChangeStatusModalContext);

  return context;
}