import React,{createContext, useEffect, useState, useContext} from 'react';
import api from '../../services/api';

const TIME_TO_INTERVAL_MS = 1000 * 60;

const MovementsServicesContext = createContext([]);

export function MovementsServicesProvider({children}){
 
  const [list, setList] = useState([]);

  async function fetchAndUpdateData(){

      const response = await api.get('/movements');

      setList(response.data)


  }

  useEffect(() => {
    
    fetchAndUpdateData()

  },[])

  useEffect(() => {

    const intervalId = setInterval(() => {

      fetchAndUpdateData();

    },TIME_TO_INTERVAL_MS)  

    return () => {
      clearInterval(intervalId)
    }

  }, []);

 

  return(
    <MovementsServicesContext.Provider value={{list, setList}}>
      {children}
    </MovementsServicesContext.Provider>
  )
} 

export function useMovementsServices(){
  const context = useContext(MovementsServicesContext);
  
  return context;
}