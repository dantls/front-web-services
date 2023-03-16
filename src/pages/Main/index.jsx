import React from 'react';
import { useHistory } from "react-router-dom";
import { Container, ButtonsContainer } from './styles';
import { BiCustomize, BiDetail } from "react-icons/bi";
import Button from '../../components/Button';


const Main = () => {
  const history = useHistory();
  const goShipment1 = () => history.push('/shipment1');
  const goShipment2 = () => history.push('/shipment2');
  const goDetail = () => history.push('/details');
  const goPicking = () => history.push('/pickings');
  const goSamples = () => history.push('/samples');
  const goMovement = () => history.push('/movements');
  const goMovementForecast = () => history.push('/movements-forecast');

  return(
    <Container>
      <ButtonsContainer>
        <Button
          color={'#1098F7'}
          onClick={goShipment1}
        > 
          Expedição
          <BiCustomize />
        </Button>
        <Button
          color={'#1098F7'}
          onClick={goShipment2}
        > 
          Expedição2
          <BiCustomize />
        </Button>
       
        <Button
          color={'#d4ce82'}
          onClick={goMovement}
        >
          Movimentações
        </Button>
        <Button
          color={`rgba(216,34,47,0.8)`}
          onClick={goPicking}
        >
          Separação
        </Button>
        <Button
          color={`rgba(0,176,80,0.8)`}
          onClick={goSamples}
        >
          Pilotagem
        </Button>
        <Button
          color={'#A1C6C8'}
          onClick={goDetail}
        >
          Detalhes
          <BiDetail />
        </Button>
        <Button
          color={'#F7A156'}
          onClick={goMovementForecast}
        >
          Previsão de Movimentações
        </Button>

      </ButtonsContainer>
   
    
    </Container>
  )
}

export { Main };