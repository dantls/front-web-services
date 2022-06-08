import React,{createContext, useEffect, useState, useContext} from 'react';
import api from '../../services/api';

const TIME_TO_INTERVAL_MS = 1000 * 60;

const PickingsServicesContext = createContext([]);

export function PickingsServicesProvider({children}){
 
  const [list, setList] = useState([]);
  const [totals, setTotals] = useState([]);

  async function fetchAndUpdateData(){


    const [ responsePickings, responsePickingsResume] = await Promise.all([
      api.get('/pickings'),
      api.get('/pickings-total')
    ])

      setTotals(responsePickingsResume.data)
      setList(responsePickings.data)


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
    <PickingsServicesContext.Provider value={{list, totals, setList}}>
      {children}
    </PickingsServicesContext.Provider>
  )
} 

export function usePickingsServices(){
  const context = useContext(PickingsServicesContext);
  
  return context;
}