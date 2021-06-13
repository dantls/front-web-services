import { Board } from '../../components/Board';
import { useServices } from '../../hooks/useServices';

function Dashboard() {
  const list = useServices();
  
  return (
    <>
      <Board list={list}/>
    </>
  );
}

export default Dashboard;
