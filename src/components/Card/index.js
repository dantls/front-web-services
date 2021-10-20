import React from 'react';
import { useChangeStatusModal } from '../../hooks/useChangeStatusModal';

import { Container, Label } from './styles';

function Card({data}) {

  const {handleOpenChangeStatusModal} = useChangeStatusModal();
  
  return (
    <Container onClick={
      handleOpenChangeStatusModal
    } >
      <header>
        <Label color={data.label} /> 
      </header>
      <p>{data.content}</p>
    </Container>
  )
}

export {Card};