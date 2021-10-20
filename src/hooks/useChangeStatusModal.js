import {createContext, useState,useContext} from 'react';


const ChangeStatusModalContext = createContext({});


export function ChangeStatusModalProvider(props) {
  

  const [isChangeStatusModalOpen, setIsChangeStatusModalOpen] = useState(false);

  function handleOpenChangeStatusModal(){
    setIsChangeStatusModalOpen(true);
  }
  function handleCloseChangeStatusModal(){
    setIsChangeStatusModalOpen(false);
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