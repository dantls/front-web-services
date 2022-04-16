import {createContext, useState,useContext} from 'react';
import { useDataNewServiceStore } from '../../services/stores/dataStores2';

const NewServiceModalContext = createContext({});

export function NewServiceModalProvider(props) {
  const { setOrderData } = useDataNewServiceStore();


  const [isNewServiceModalOpen2, setIsNewServiceModalOpen] = useState(false);

  function handleOpenNewServiceModal2(){
    setIsNewServiceModalOpen(true);
  }
  function handleCloseNewServiceModal2(){
    setOrderData(null)
    setIsNewServiceModalOpen(false);
  }

  return (
    <NewServiceModalContext.Provider value={{
      isNewServiceModalOpen2,
      handleOpenNewServiceModal2,
      handleCloseNewServiceModal2
    }}>
      {props.children}
    </NewServiceModalContext.Provider>
  )
}

export function useNewServiceModal(){
  const context = useContext(NewServiceModalContext);

  return context;
}