import React from 'react';
import { List } from '../List';

import { Container } from './styles';


function Board({addresses}) {

  return (
    <Container>
      {addresses.map(item => 
        
        <List 
          key={item.description}
          data={item}
        />
        )
      }
      
    </Container>
  )
}

export {Board}; 