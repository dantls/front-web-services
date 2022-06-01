import React from 'react';
import { PickingCard } from '../PickingCard';

import { Container } from './styles';
import { useMovementsServices } from '../../hooks/movementsService';

function PickingList({address}) {
  const {list} = useMovementsServices();
  return (
    <Container>
      <header>
        <h2>{address.description}</h2>
      </header>
      <ul>     
        {list?.map(item => (
          <PickingCard data={item}/>
        ))}
      </ul>
    </Container>
  )
}

export {PickingList};