import React,{createContext, useEffect, useState, useContext} from 'react';
import api from '../../services/api';

const TIME_TO_INTERVAL_MS = 1000 * 60;

const SamplesServicesContext = createContext([]);

export function SamplesServicesProvider({children}){
 
  const [list, setList] = useState([]);
  const [totals, setTotals] = useState([]);

  async function fetchAndUpdateData(){

    const [ responseSamples, responseSamplesResume] = await Promise.all([
      api.get('/samples'),
      api.get('/samples-total')
    ])
    // const responseSamples = await api.get('/samples');
    setList(responseSamples.data);
    setTotals(responseSamplesResume.data);

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
    <SamplesServicesContext.Provider value={{list, totals, setList}}>
    {/* // <SamplesServicesContext.Provider value={{list, setList}}> */}
      {children}
    </SamplesServicesContext.Provider>
  )
} 

export function useSamplesServices(){
  const context = useContext(SamplesServicesContext);
  
  return context;
}