import React,{createContext, useEffect, useState, useContext} from 'react';
import api from '../../services/api';

import { useChangeStatusModal } from '../changeStatus';
import { useNewServiceModal1 } from '../newService1';
import { useNewServiceModal2 } from '../newService2';

const TIME_TO_INTERVAL_MS = 1000 * 60;

const ServicesContext = createContext([]);

export function ServicesProvider({children}){

  const {isChangeStatusModalOpen} = useChangeStatusModal();
  const {isNewServiceModalOpen1} = useNewServiceModal1();
  const {isNewServiceModalOpen2} = useNewServiceModal2();

 
  const [list, setList] = useState([]);
  const [addresses, setAddresses] = useState([]);

  async function fetchAndUpdateData(){

      const [ responseAddresses, responseServices] = await Promise.all([
         api.get('/list-addresses'),
         api.get('/list-services')
      ])

      setAddresses(responseAddresses.data)
      setList(responseServices.data)
      
  }

  useEffect(() => {
    
    fetchAndUpdateData()

  },[])
 
  useEffect(() => {

    const intervalId = setInterval(() => {

      if(isChangeStatusModalOpen ||isNewServiceModalOpen1 ||isNewServiceModalOpen2) return;

      fetchAndUpdateData();

    },TIME_TO_INTERVAL_MS)  

    return () => {
      clearInterval(intervalId)
    }

  }, [isChangeStatusModalOpen,isNewServiceModalOpen1,isNewServiceModalOpen2]);

  return(
    <ServicesContext.Provider value={{list, addresses, setList}}>
      {children}
    </ServicesContext.Provider>
  )
} 

export function useServices(){
  const context = useContext(ServicesContext);
  
  return context;
}