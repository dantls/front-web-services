import React from 'react';
import { useChangeStatusModal } from '../../hooks/changeStatus';
import { useDataStore } from '../../services/stores/dataStores';
import { Container, Label } from './styles';

function Card({data}) {

  const { setSelectedData } = useDataStore();
  const {handleOpenChangeStatusModal} = useChangeStatusModal();


  function formattedDate(value){
    let data = new Date(value),
        day = data.getDate().toString().padStart(2, '0'),
        month  = (data.getMonth()+1).toString().padStart(2, '0'), //+1 pois no getMonth Janeiro começa com zero.
        year  = data.getFullYear();
    return day+"/"+month+"/"+year;
  }


  return (
    <Container onClick={
      () => {
        setSelectedData(data)
        handleOpenChangeStatusModal()
      }
    } >
      <header>
        <Label color={data.label} /> 
      </header>
      <p>{data.content}</p>
      <span>{formattedDate(data.order_created)}</span>
      <p>{data.order_type}</p>
      <p>{data.final_address}</p>
    </Container>
  )
}

export {Card};