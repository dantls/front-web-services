import React from 'react';
// import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

import { Container, ButtonsContainer } from './styles';
import { BiCustomize, BiDetail } from "react-icons/bi";
// import studyIcon from '../../assets/images/icons/study.png';
// import giveClasses from '../../assets/images/icons/give-classes.png';
import Button from '../../components/Button';
// import heartIcon from '../../assets/images/icons/heart.png';


const Main = () => {
  const history = useHistory();
  const goDashboard = () => history.push('dashboard');
  const goShipment2 = () => history.push('/shipment2');
  const goDetail = () => history.push('details');
  const goPicking = () => history.push('pickings');
  const goMovement = () => history.push('movements');

  return(
    <Container>
      <ButtonsContainer>
        <Button
          color={'#1098F7'}
          onClick={goDashboard}
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
      </ButtonsContainer>
       <Button
          color={'#91C7B1'}
          onClick={goDetail}
        >
          Detalhes
          <BiDetail />
        </Button>

    
    </Container>
  )
}

export { Main };