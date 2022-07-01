import React from 'react';
import { ShipmentCard2 } from '../ShipmentCard2';

import { Container } from './styles';
import { useNewServiceModal2 } from '../../hooks/newService2';
import { useDataNewServiceStore } from '../../services/stores/dataStores2';
import { useShipment2Services } from '../../hooks/shipment2Service';

function ShipmentList2({data}) {
  const {list} = useShipment2Services();


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
        <h2>{data.description === 'Pendências2' ?`${data.description} |(${total})` : data.description}</h2>
      </header>
      <ul>     
       {
        filteredCards[0]?.cards.map(card => ( <ShipmentCard2 key={card.id} data={card} />))
       }

      </ul>
    </Container>
  )
}

export {ShipmentList2};