import React from 'react';
import { Card } from '../Card';

import { Container } from './styles';
import { useNewServiceModal } from '../../hooks/newService';
import { useDataNewServiceStore } from '../../services/stores/dataStores2';
import { useServices } from '../../hooks/services';

function List({data}) {
  const {list} = useServices();
  const { setOrderData } = useDataNewServiceStore();
  const {handleOpenNewServiceModal2} = useNewServiceModal();


  const filteredCards = list.filter(item =>{
     if( item.title === data.description){
        return item.cards
     }
     return false 
    }
  )

  return (
    <Container>
      <header onClick={
          () => {
            setOrderData(data.description)
            handleOpenNewServiceModal2()
          }
        }
      >
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