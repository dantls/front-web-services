import React from 'react';
import { SamplesCard } from '../SamplesCard';

import { Container } from './styles';
import { useSamplesServices } from '../../hooks/samplesService';

function SamplesList() {
  const {list} = useSamplesServices();
  return (
    <Container>
      <ul>     
        {list?.map(item => (
          <SamplesCard data={item}/>
        ))}
      </ul>
    </Container>
  )
}

export {SamplesList};