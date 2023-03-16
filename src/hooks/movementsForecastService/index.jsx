import React,{createContext, useEffect, useState, useContext} from 'react';
import api from '../../services/api';

const TIME_TO_INTERVAL_MS = 1000 * 60;

const MovementsForecastServicesContext = createContext([]);

export function MovementsForecastServicesProvider({children}){
 
  const [listMovementsForecast, setListMovementsForecast] = useState([]);

  async function fetchAndUpdateData(){
     const response = await api.get('/movements-forecast')
    
     setListMovementsForecast(response.data)
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
    <MovementsForecastServicesContext.Provider value={{listMovementsForecast,  setListMovementsForecast}}>
      {children}
    </MovementsForecastServicesContext.Provider>
  )
} 

export function useMovementsForecastServices(){
  const context = useContext(MovementsForecastServicesContext);
  
  return context;
}