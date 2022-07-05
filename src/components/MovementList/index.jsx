import React from 'react';
import { MovementCard } from '../MovementCard';

import { Container } from './styles';
import { useMovementsServices } from '../../hooks/movementsService';

function MovementList() {
  const {listMovements} = useMovementsServices();
  return (
    <Container>
      <ul>     
        {listMovements?.map(item => (
          <MovementCard data={item}/>
        ))}
      </ul>
    </Container>
  )
}

export {MovementList};