import React,{createContext, useState,useContext} from 'react';
import { useDataNewServiceStore } from '../../services/stores/dataStores2';

const NewServiceModalContext2 = createContext({});

export function NewServiceModalProvider2(props) {
  const { setOrderData } = useDataNewServiceStore();


  const [isNewServiceModalOpen2, setIsNewServiceModalOpen2] = useState(false);

  function handleOpenNewServiceModal2(){
    setIsNewServiceModalOpen2(true);
  }
  function handleCloseNewServiceModal2(){
    setOrderData(null)
    setIsNewServiceModalOpen2(false);
  }

  return (
    <NewServiceModalContext2.Provider value={{
      isNewServiceModalOpen2,
      handleOpenNewServiceModal2,
      handleCloseNewServiceModal2
    }}>
      {props.children}
    </NewServiceModalContext2.Provider>
  )
}

export function useNewServiceModal2(){
  const context = useContext(NewServiceModalContext2);

  return context;
}