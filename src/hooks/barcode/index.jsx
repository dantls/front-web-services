import React, {createContext, useState,useContext} from 'react';

const BarcodeModalContext = createContext({});

export function BarcodeModalProvider(props) {
  const [isBarcodeModalOpen, setIsBarcodeModalOpen] = useState(false);

  function handleOpenBarcodeModal(){
    setIsBarcodeModalOpen(true);
  }
  function handleCloseBarcodeModal(){
    setIsBarcodeModalOpen(false);
  }

  return (
    <BarcodeModalContext.Provider value={{
      isBarcodeModalOpen,
      handleOpenBarcodeModal,
      handleCloseBarcodeModal
    }}>
      {props.children}
    </BarcodeModalContext.Provider>
  )
}

export function useBarcodeModal(){
  const context = useContext(BarcodeModalContext);

  return context;
}