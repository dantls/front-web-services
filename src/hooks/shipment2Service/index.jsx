import React,{createContext, useEffect, useState, useContext} from 'react';
import api from '../../services/api';

import { useChangeStatusModal } from '../changeStatus';
import { useNewServiceModal1 } from '../newService1';
import { useNewServiceModal2 } from '../newService2';

const TIME_TO_INTERVAL_MS = 1000 * 60;

const Shipment2ServicesContext = createContext([]);

export function Shipment2ServicesProvider({children}){

  const {isChangeStatusModalOpen} = useChangeStatusModal();
  const {isNewServiceModalOpen1} = useNewServiceModal1();
  const {isNewServiceModalOpen2} = useNewServiceModal2();

 
  const [list, setList] = useState([]);
  const [addresses, setAddresses] = useState([]);

  async function fetchAndUpdateData(){

      const [ responseAddresses, responseServices] = await Promise.all([
         api.get('/list-addresses2'),
         api.get('/list-services2')
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
    <Shipment2ServicesContext.Provider value={{list, addresses, setList}}>
      {children}
    </Shipment2ServicesContext.Provider>
  )
} 

export function useShipment2Services(){
  const context = useContext(Shipment2ServicesContext);
  
  return context;
}