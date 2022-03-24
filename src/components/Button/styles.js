
import styled from 'styled-components';

export const Container = styled.button`
  height: 150px;
  width: 48%;
  background: ${props => props.color ? props.color : '#04d361'};
  border-radius: 8px;
  padding: 24px;
  justify-content: space-between;
`;
export const ButtonText = styled.p`
  color: #fff;
  font-family: Archivo_700Bold;
  font-size: 20px;
`;