import React from 'react';
import { ShipmentList2 } from '../ShipmentList2';

import { Container } from './styles';


function ShipmentBoard2({addresses}) {

  return (
    <Container>
      {addresses.map(item => 
        
        <ShipmentList2 
          key={item.description}
          data={item}
        />
        )
      }
      
    </Container>
  )
}

export {ShipmentBoard2}; 