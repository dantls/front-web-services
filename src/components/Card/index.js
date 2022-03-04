import React from 'react';
import { useChangeStatusModal } from '../../hooks/useChangeStatusModal';
import { useDataStore } from '../../services/stores/dataStores';
import { Container, Label } from './styles';

function Card({data}) {

  const { setSelectedData } = useDataStore();
  const {handleOpenChangeStatusModal} = useChangeStatusModal();
  
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
      <p>{data.order_type}</p>
    </Container>
  )
}

export {Card};