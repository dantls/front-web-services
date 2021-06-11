import {createContext, useEffect, useState} from 'react';
import api from './services/api';

export const ServicesContext = createContext([]);

export function ServicesProvider({children}){
  const [list, setList] = useState([]);

  useEffect(() => {
    
    (async () => {
      const response = await api.get('/list-services');

      setList(response.data)
    })()

  },[])

  return(
    <ServicesContext.Provider value={list}>
      {children}
    </ServicesContext.Provider>
  )
} 

