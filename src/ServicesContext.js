import {createContext, useEffect, useState} from 'react';
import api from './services/api';

export const ServicesContext = createContext([]);

export function ServicesProvider({children}){
  const [list, setList] = useState([]);
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    
    (async () => {

      const [ responseAddresses, responseServices] = await Promise.all([
         api.get('/list-addresses'),
         api.get('/list-services')
      ])

      setAddresses(responseAddresses.data)
      setList(responseServices.data )
      
    })()

  },[])
 
  return(
    <ServicesContext.Provider value={{list, addresses, setList}}>
      {children}
    </ServicesContext.Provider>
  )
} 

