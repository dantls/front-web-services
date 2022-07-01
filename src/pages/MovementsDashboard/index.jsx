import React from 'react';
import { MovementBoard } from '../../components/MovementBoard';
// import {Container} from './styles';
// import { useMovementsServices } from '../../hooks/movementsService';
import './styles.css';

export function MovementsDashboard() {
  // const {list, totals} = useMovementsServices();


  return (
    <>
  {/* <Container> */}
        {/* <header>
          <h4>{`PEDIDOS: ${list.length}`}</h4>
          {
            totals.map(item => (
              <h4>{`${item.SITUACAO} :  ${item.QUANTIDADE}`}</h4>
            ))
          }
        </header> */}
        <header>
          <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"/>
          <div class="container">
              <div class="row">
                  <div class="col-md-4 col-xl-3">
                      <div class="card bg-c-blue order-card">
                          <div class="card-block">
                            <p class="m-b-0">Pedidos</p>
                            <h1 class="text-right"><span>486</span></h1>
                          </div>
                      </div>
                  </div>
                    
                  <div class="col-md-4 col-xl-3">
                      <div class="card bg-c-green order-card">
                      <div class="card-block">
                            <p class="m-b-0">Livres</p>
                            <h1 class="text-right"><span>486</span></h1>
                          </div>
                      </div>
                  </div>
                  
                  <div class="col-md-4 col-xl-3">
                      <div class="card bg-c-yellow order-card">
                      <div class="card-block">
                            <p class="m-b-0">Execução</p>
                            <h1 class="text-right"><span>486</span></h1>
                          </div>
                      </div>
                  </div>
                  
                  <div class="col-md-4 col-xl-3">
                      <div class="card bg-c-pink order-card">
                      <div class="card-block">
                            <p class="m-b-0">Finalizados</p>
                            <h1 class="text-right"><span>486</span></h1>
                          </div>
                      </div>
                  </div>
            </div>
          </div>
        </header>
        <MovementBoard />
  </>
    // </Container>
  );
}

