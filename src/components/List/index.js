import React from 'react';
import { Card } from '../Card';

import { Container } from './styles';

import { useContext }from 'react';
import { ServicesContext } from '../../ServicesContext';

function List({data}) {
  const {list} = useContext(ServicesContext);


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