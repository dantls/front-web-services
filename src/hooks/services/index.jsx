import {createContext, useEffect, useState, useContext} from 'react';
import api from '../../services/api';
import { useDataStore } from '../../services/stores/dataStores';

const ServicesContext = createContext([]);

export function ServicesProvider({children}){
  const { setSelectedData } = useDataStore();
  const [list, setList] = useState([]);
  const [listService, setListService] = useState([]);
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    
    (async () => {

      const [ responseAddresses, responseServices] = await Promise.all([
         api.get('/list-addresses'),
         api.get('/list-services')
      ])

      setAddresses(responseAddresses.data)
      setList(responseServices.data)
      
    })()


  },[])
 
  useEffect(() => {
    
    (async () => {

      const services = await api.get('/list-service',{order:setSelectedData });

      setListService(services);
      
    })()


  },[setSelectedData])


  return(
    <ServicesContext.Provider value={{list, addresses,listService, setList}}>
      {children}
    </ServicesContext.Provider>
  )
} 

export function useServices(){
  const context = useContext(ServicesContext);
  
  return context;
}