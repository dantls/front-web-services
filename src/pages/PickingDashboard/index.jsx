import React from 'react';
import { PickingBoard } from '../../components/PickingBoard';
import {Container} from './styles';
import { useMovementsServices } from '../../hooks/movementsService';

export function PickingDashboard() {
  let value = [{description: 'Movimentações', id: '01.1.002'}];
  const {list} = useMovementsServices();


  return (
    <Container>
        <h4>{`Total de Pedidos: ${list.length}`}</h4>
        <PickingBoard 
          addresses = {value}
        />

    </Container>
  );
}

