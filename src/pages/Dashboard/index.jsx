import React from 'react';
import { Board } from '../../components/Board';
import { useServices } from '../../hooks/services';
import {Container} from './styles';


export function Dashboard() {
  const {addresses} = useServices();
  return (
    <Container>
      <Board
        addresses={addresses}
      />
    </Container>
  );
}

