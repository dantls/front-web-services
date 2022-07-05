import React,{createContext, useEffect, useState, useContext} from 'react';
import api from '../../services/api';

const TIME_TO_INTERVAL_MS = 1000 * 60;

const MovementsServicesContext = createContext([]);

export function MovementsServicesProvider({children}){
 
  const [listMovements, setListMovements] = useState([]);
  const [totalsMovements, setTotalsMovements] = useState([]);

  async function fetchAndUpdateData(){
     const [ responseMovements, responseMovementsResume] = await Promise.all([
        api.get('/movements'),
        api.get('/movements-total')
     ])

     setTotalsMovements(responseMovementsResume.data)
     setListMovements(responseMovements.data)


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
    <MovementsServicesContext.Provider value={{listMovements, totalsMovements, setListMovements}}>
      {children}
    </MovementsServicesContext.Provider>
  )
} 

export function useMovementsServices(){
  const context = useContext(MovementsServicesContext);
  
  return context;
}