import React from 'react';
import formattedDate from '../../utils/formattedDate';
import { Container, Body } from './styles';

function PickingCard({data}) {
  return (
    <Container color={data.OCO}>
      <span>{`Lote: ${data?.LOTE}`}</span>
      <p>{`Pedido: ${data?.PEDIDO}`}</p>
      <p className='data'>{`Data: ${formattedDate(data?.DATE_LOTE)}`}</p>
      {data?.CARDS.map(item => (<Body color={item.SITUACAO === 'LIBERADA' ? '#37C871': item.SITUACAO === 'EM EXECUCAO'? '#FDFD96': item.SITUACAO === 'ESPERA'? '#F7A156':item.SITUACAO === 'OCORRENCIA'? '#696969':'#CD5C5C'}>
            <p> {`${item.POSTO} | ${item.ATV}`}</p>
            <p>{item.ENDERECO}</p>
            { (item.SITUACAO === 'EM EXECUCAO' || item.SITUACAO === 'ESPERA') && <p>{item.USER}</p>}
          </Body>
          ))}
    </Container>
  )
}

export {PickingCard};