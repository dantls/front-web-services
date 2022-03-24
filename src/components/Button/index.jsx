import React from 'react';
import { Container, ButtonText } from './styles';

const Button = ({children, color, img ,...rest}) => {

  return (
    <Container color={color} {...rest}>
      <Image source={img} />
      <ButtonText>
        {children}
      </ButtonText>
    </Container> 
)}

export default Button;