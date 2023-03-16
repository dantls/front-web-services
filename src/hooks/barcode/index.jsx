import React, {createContext, useState,useContext} from 'react';

const BarcodeModalContext = createContext({});

export function BarcodeModalProvider(props) {
  const [isBarcodeModalOpen, setIsBarcodeModalOpen] = useState(false);
  const [barcode, setBarcode] = useState(false);

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
      handleCloseBarcodeModal,
      setBarcode,
      barcode
    }}>
      {props.children}
    </BarcodeModalContext.Provider>
  )
}

export function useBarcodeModal(){
  const context = useContext(BarcodeModalContext);

  return context;
}