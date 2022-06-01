import React from 'react';
import { PickingList } from '../PickingList';
import { Container } from './styles';


function PickingBoard({addresses}) {

  return (
    <Container>
    {addresses.map(item => 
        <PickingList 
          key={item.description}
          address={item.description}
        />
      )
    } 
    </Container>
  )
}

export {PickingBoard}; 