import React,{createContext, useState,useContext} from 'react';

const NewServiceModalContext1 = createContext({});

export function NewServiceModalProvider1(props) {

  const [isNewServiceModalOpen1, setIsNewServiceModalOpen1] = useState(false);

  function handleOpenNewServiceModal1(){
    setIsNewServiceModalOpen1(true);
  }
  function handleCloseNewServiceModal1(){
    setIsNewServiceModalOpen1(false);
  }

  return (
    <NewServiceModalContext1.Provider value={{
      isNewServiceModalOpen1,
      handleOpenNewServiceModal1,
      handleCloseNewServiceModal1
    }}>
      {props.children}
    </NewServiceModalContext1.Provider>
  )
}

export function useNewServiceModal1(){
  const context = useContext(NewServiceModalContext1);

  return context;
}