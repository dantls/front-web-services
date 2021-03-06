import React from 'react';
import { Card } from '../Card';

import { Container } from './styles';
import { useNewServiceModal2 } from '../../hooks/newService2';
import { useDataNewServiceStore } from '../../services/stores/dataStores2';
import { useServices } from '../../hooks/services';

function List({data}) {
  const {list} = useServices();
  const {setOrderData} = useDataNewServiceStore();
  const {handleOpenNewServiceModal2} = useNewServiceModal2();

  const filteredCards = list.filter(item =>{
     if( item.title === data.description){
        return item.cards
     }
     return false 
    }
  )

  const item = list.find(item => {
    if( item.title === data.description){
      return item
    }
    return false
  })

  let total=0 ;
  
  if(item){
    total =  item.total;
  }


  return (
    <Container>
      <header onClick={
          () => {
            setOrderData(data.description)
            handleOpenNewServiceModal2()
          }
        }
      >
        <h2>{data.description === 'PendĂȘncias' ?`${data.description} |(${total})` : data.description}</h2>
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