import React from 'react';
import { MovementBoard } from '../../components/MovementBoard';
import {Container} from './styles';
 import { useMovementsServices } from '../../hooks/movementsService';
import './styles.css';

export function MovementsDashboard() {
  const {listMovements, totalsMovements} = useMovementsServices();


  return (
      <Container>
        <header>
          <h4>{`PEDIDOS: ${listMovements.length}`}</h4>
          <div>
          <h4>SERVIÇOS:</h4>  
          {
            totalsMovements.map(item => (
              <h4>{`${item.SITUACAO} :  ${item.QUANTIDADE}`}</h4>
            ))
          }
          </div>
        </header>
        <MovementBoard />
   

      </Container>

  );
}

