import React,{createContext, useEffect, useState, useContext} from 'react';
import api from '../../services/api';

const TIME_TO_INTERVAL_MS = 1000 * 60;

const MovementsServicesContext = createContext([]);

export function MovementsServicesProvider({children}){
 
  const [list, setList] = useState([]);
  const [totals, setTotals] = useState([]);

  async function fetchAndUpdateData(){
     const [ responseMovements, responseMovementsResume] = await Promise.all([
        api.get('/movements'),
        api.get('/movements-total')
     ])

     setTotals(responseMovementsResume.data)
     setList(responseMovements.data)


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
    <MovementsServicesContext.Provider value={{list, totals, setList}}>
      {children}
    </MovementsServicesContext.Provider>
  )
} 

export function useMovementsServices(){
  const context = useContext(MovementsServicesContext);
  
  return context;
}