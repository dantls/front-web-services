import React from 'react';
import ModalAdd from '../ModalAdd';

import { Container, Label } from './styles';

function Card({data}) {

  return (
    <Container onClick={()=>{
      <ModalAdd />
    }} >
      <header>
        <Label color={data.label} /> 
      </header>
      <p>{data.content}</p>
    </Container>
  )
}

export {Card};