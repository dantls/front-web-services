import React from 'react';
import { MovementCard } from '../MovementCard';

import { Container } from './styles';
import { useMovementsServices } from '../../hooks/movementsService';

function MovementList() {
  const {list} = useMovementsServices();
  
  return (
    <Container>
      <ul>     
        {list?.map(item => (
          <MovementCard data={item}/>
        ))}
      </ul>
    </Container>
  )
}

export {MovementList};