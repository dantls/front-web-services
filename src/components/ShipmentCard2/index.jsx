import React from 'react';
import { useChangeStatusModal2 } from '../../hooks/changeStatus2';
import { useDataStoreShipment2 } from '../../services/stores/dataStoresShipment2';
import { Container } from './styles';

function ShipmentCard2({data}) {

  const { setSelectedData2 } = useDataStoreShipment2();
  const {handleOpenChangeStatusModal2} = useChangeStatusModal2();


  function formattedDate(value){
    let data = new Date(value),
        day = data.getDate().toString().padStart(2, '0'),
        month  = (data.getMonth()+1).toString().padStart(2, '0'), //+1 pois no getMonth Janeiro começa com zero.
        year  = data.getFullYear();
    return day+"/"+month+"/"+year;
  }


  return (
    <Container  
    color={data.label}
    onClick={
      () => {
        setSelectedData2(data)
        handleOpenChangeStatusModal2()
      }
    } >
      {/* <header>
        <Label color={data.label} /> 
      </header> */}
      <p>{data.content}</p>
      <span>{formattedDate(data.order_created)}</span>
      <p>{data.order_type}</p>
      <p>{data.final_address}</p>
    </Container>
  )
}

export {ShipmentCard2};