
import { Board } from '../../components/Board';
import { useContext }from 'react';
import { ServicesContext } from '../../ServicesContext';



function Dashboard() {
  const list = useContext(ServicesContext);
  
  return (
    <>
      <Board list={list}/>
    </>
  );
}

export default Dashboard;
