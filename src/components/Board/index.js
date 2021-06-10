import React from 'react';
import { List } from '../List';

import { Container } from './styles';


function Board({list}) {

  return (
    <Container>
      {list.map(item => 
        <List 
          key= {item.title}
          data={item}
        />)
      }
      
    </Container>
  )
}

export {Board}; 