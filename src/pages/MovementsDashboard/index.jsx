import React from 'react';
import { MovementBoard } from '../../components/MovementBoard';
import {Container} from './styles';
import { useMovementsServices } from '../../hooks/movementsService';

export function MovementsDashboard() {
  const {list, totals} = useMovementsServices();


  return (
    <Container>
        <header>
          <h4>{`PEDIDOS: ${list.length}`}</h4>
          {
            totals.map(item => (
              <h4>{`${item.SITUACAO} :  ${item.QUANTIDADE}`}</h4>
            ))
          }
        </header>
        <MovementBoard />

    </Container>
  );
}

