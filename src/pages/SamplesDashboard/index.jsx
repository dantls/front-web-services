import React from 'react';
import { SamplesBoard } from '../../components/SamplesBoard';
import {Container} from './styles';
import { useSamplesServices } from '../../hooks/samplesService';

export function SamplesDashboard() {
  const {list, totals} = useSamplesServices();


  return (
    <Container>
       <header>
          <h4>{`PEDIDOS: ${list.length}`}</h4>
          <div>
          <h4>SERVIÇOS:</h4>  
          {
            totals.map(item => (
              <h4>{`${item.SITUACAO} :  ${item.QUANTIDADE}`}</h4>
            ))
          }
          </div>
        </header>
        <SamplesBoard />

    </Container>
  );
}

