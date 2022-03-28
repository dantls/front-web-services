import {createContext, useEffect, useState, useContext} from 'react';
import api from '../../services/api';

const ServicesContext = createContext([]);

export function ServicesProvider({children}){
  const [list, setList] = useState([]);
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    
    (async () => {

      const [ responseAddresses, responseServices] = await Promise.all([
         api.get('/list-addresses'),
         api.get('/list-services')
      ])

      setAddresses(oldState => [...oldState, ...responseAddresses.data])
      setList(oldState => [...oldState,...responseServices.data])
      
    })()


  },[])
 


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