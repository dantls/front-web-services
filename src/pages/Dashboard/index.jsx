import { Board } from '../../components/Board';
import { useServices } from '../../hooks/useServices';

export function Dashboard() {
  const {addresses} = useServices();
  
  return (
    <>
      <Board
        addresses={addresses}
      />
    </>
  );
}

