import React from 'react';
import { PickingBoard } from '../../components/PickingBoard';
import {Container} from './styles';
import { usePickingsServices } from '../../hooks/pickingsService';

export function PickingsDashboard() {
  const {list, totals} = usePickingsServices();


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
        <PickingBoard 
        />

    </Container>
  );
}

