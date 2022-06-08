import React from 'react';
import { PickingCard } from '../PickingCard';

import { Container } from './styles';
import { usePickingsServices } from '../../hooks/pickingsService';

function PickingList() {
  const {list} = usePickingsServices();
  return (
    <Container>
      <ul>     
        {list?.map(item => (
          <PickingCard data={item}/>
        ))}
      </ul>
    </Container>
  )
}

export {PickingList};