import React from 'react';

import { Container,Title, TitleBold, ButtonsContainer, TotalConnections } from './styles';

import studyIcon from '../../assets/images/icons/study.png';
import giveClasses from '../../assets/images/icons/give-classes.png';
import Button from '../../components/Button';
import heartIcon from '../../assets/images/icons/heart.png';


const Main = () => {



  return(
    <Container>

      <Title>
        Seja bem-vindo, {'\n'}
        <TitleBold>
          O que deseja fazer?
        </TitleBold>
      </Title>

      <ButtonsContainer>
        <Button
          img={studyIcon}
          color={'#9871f5'}
          onPress={handleNavigateToStudyPages}
        >
          Estudar
        </Button>
        <Button
          onPress={handleNavigateToGiveClassesPage}
          img={giveClasses}
          color={'#04d361'}
        >
          Dar aulas
        </Button>
      </ButtonsContainer>

      <TotalConnections>
        Total {totalConnections} conexões já realizadas {' '}
        <Image source={heartIcon}/>
      </TotalConnections>
    </Container>
  )
}

export default Main;