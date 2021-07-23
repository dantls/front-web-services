import { Board } from '../../components/Board';
import { useContext }from 'react';
import { ServicesContext } from '../../ServicesContext';

export function Dashboard() {
  const {addresses} = useContext(ServicesContext);
  
  return (
    <>
      <Board
        addresses={addresses}
      />
    </>
  );
}

