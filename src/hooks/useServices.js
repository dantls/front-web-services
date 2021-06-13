import {createContext, useContext, useEffect, useState} from 'react';
import api from '../services/api';

const ServicesContext = createContext([]);

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

export function useServices(){
  const context = useContext(ServicesContext);

  return context;
}