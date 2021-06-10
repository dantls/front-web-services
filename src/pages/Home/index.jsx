import {useEffect, useState} from 'react';

import api from '../../services/api';

import { Board } from '../../components/Board';

function Home() {
  const [list, setList] = useState([]);

  useEffect(() => {
    
    (async () => {
      const response = await api.get('/list-services');

      setList(response.data)
    })()

  },[])


  return (
    <>
      <Board list={list}/>
    </>
  );
}

export default Home;
