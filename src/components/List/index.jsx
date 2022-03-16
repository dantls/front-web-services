import React from 'react';
import { Card } from '../Card';

import { Container } from './styles';
import { useServices } from '../../hooks/services';

function List({data}) {
  const {list} = useServices();


  const filteredCards = list.filter(item =>{
     if( item.title === data.description){
        return item.cards
     }
     return false 
    }
  )

  return (
    <Container>
      <header>
        <h2>{data.description}</h2>
      </header>
      <ul>     
       {
        filteredCards[0]?.cards.map(card => ( <Card key={card.id} data={card} />))
       }

      </ul>
    </Container>
  )
}

export {List};