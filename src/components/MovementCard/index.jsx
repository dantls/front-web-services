import React from 'react';
import formattedDate from '../../utils/formattedDate';
import { Container, Body } from './styles';

function MovementCard({data}) {
  return (
    <Container>
      <span>{`Lote: ${data?.LOTE}`}</span>
      <p>{`Pedido: ${data?.PEDIDO}`}</p>
      <p className='data'>{`Data: ${formattedDate(data?.DATE_LOTE)}`}</p>
      {data?.CARDS.map(item => (<Body color={item.SITUACAO === 'LIBERADA' ? '#37C871': item.SITUACAO === 'EM EXECUCAO'? '#FDFD96': item.SITUACAO === 'ESPERA'? '#F7A156':'#CD5C5C'}>
            <p>{item.POSTO}</p>
            <p>{item.UMA}</p>
            <p>{item.ENDERECO}</p>
            <p>{item.USER}</p>
          </Body>
          ))}
    </Container>
  )
}

export {MovementCard};