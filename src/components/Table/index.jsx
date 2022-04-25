import React from 'react';
import { Container } from './styles';

export function Table({services}){

  function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }
  
  function formatDate(date) {
    if(!date){
      return;
    }
    return (
      [
        padTo2Digits(date.getDate()),
        padTo2Digits(date.getMonth() + 1),
        date.getFullYear(),
      ].join('-') +
      `\n` +
      [
        padTo2Digits(date.getHours()),
        padTo2Digits(date.getMinutes()),
        padTo2Digits(date.getSeconds()),
      ].join(':')
    );
  }

  const formattedServices = services.map(item => {

    const dateFinal = item.final_date && new Date(item.final_date);
    
    const dateInitial = new Date(item.initial_date);
    const service = {
      ...item,
      formattedFinal: formatDate(dateFinal),
      formattedInitial: formatDate(dateInitial)
      // formattedFinal: dateFinal && dateFinal.getHours().toString().padStart(2, '0')
      // +':'+ dateFinal.getMinutes().toString().padStart(2, '0') 
      // +':'+ dateFinal.getSeconds().toString().padStart(2, '0'),
      // formattedInitial: dateInitial.getHours().toString().padStart(2, '0')
      // +':'+ dateInitial.getMinutes().toString().padStart(2, '0')
      // +':'+ dateInitial.getSeconds().toString().padStart(2, '0')
    }
    return(
      service
    )
  })

    return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Pedido</th>
            <th>Endereço</th>
            <th>Situação</th>
            <th>Data Inicial</th>
            <th>Data Final</th>
            <th>Usuário</th>
            <th>Tipo da Ordem</th>
          </tr>
        </thead>

        <tbody>

          {formattedServices.map( item => (
            <tr key={item.id}>
              <td>{item.order}</td>
              <td>{item.address}</td>
              <td>{item.situation}</td>
              <td>{item.formattedInitial}</td>
              <td>{item.formattedFinal}</td>
              <td>{item.username}</td>
              <td>{item.ordertype}</td>
            </tr>
          ))}
       
        </tbody>

      </table>
    </Container>
  )
}