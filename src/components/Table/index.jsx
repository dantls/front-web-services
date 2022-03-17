import { Container } from './styles';

export function Table(){


  const services = [
    {
      "id": "e4e4ab75-8102-440e-b1ff-75cb3ca6ef0f",
      "order": "XXSSAA1",
      "initial_date": "2022-03-17T20:15:40.603Z",
      "final_date": "2022-03-17T20:15:49.315Z",
      "address": "01.1.001",
      "situation": "Iniciado",
      "ordertype": null
    },
    {
      "id": "13ac925d-f70d-4b16-a967-3ff250553ef4",
      "order": "XXSSAA1",
      "initial_date": "2022-03-17T20:15:49.403Z",
      "final_date": "2022-03-17T20:15:54.863Z",
      "address": "01.1.001",
      "situation": "Pendência Comercial/Vendas/Financeiro",
      "ordertype": null
    },
    {
      "id": "69bf3406-f47e-408a-adb2-2f05e5f5a960",
      "order": "XXSSAA1",
      "initial_date": "2022-03-17T20:15:54.908Z",
      "final_date": "2022-03-17T20:15:58.690Z",
      "address": "01.1.001",
      "situation": "Faturado",
      "ordertype": null
    },
    {
      "id": "5d1834b8-c15e-4a46-a717-72ba4521a0f4",
      "order": "XXSSAA1",
      "initial_date": "2022-03-17T20:15:58.742Z",
      "final_date": "2022-03-17T20:15:58.742Z",
      "address": "01.1.001",
      "situation": "Finalizado",
      "ordertype": null
    }
  ]

  const formattedServices = services.map(item => {

    const dateFinal = new Date(item.final_date);
    const dateInitial = new Date(item.initial_date);
    const service = {
      ...item,
      formattedFinal: dateFinal.getHours()+':'+ dateFinal.getMinutes() + ':'+ dateFinal.getSeconds(),
      formattedInitial: dateInitial.getHours()+':'+ dateInitial.getMinutes() + ':'+ dateInitial.getSeconds()
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
              <td>{item.ordertype}</td>
            </tr>
          ))}
       
        </tbody>

      </table>
    </Container>
  )
}