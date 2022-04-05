
import styled from 'styled-components';

export const Container = styled.button`
  height: 150px;
  width: 48%;
  background: ${props => props.color ? props.color : '#04d361'};
  border-radius: 8px;
  padding: 1rem;
  border: 0;
  justify-content: space-evenly;
  transition: filter 0.2s;

  &:hover{
    filter: brightness(90%);
  }
  & + button {
    margin-left: 2px;
  }

  /* &:first-child {
    margin-top: 0;
  } */

`;
export const ButtonText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-family: Roboto;
  font-size: 1.4rem;
`;


// button[type="submit"]{
//   width: 100%;
//   padding: 0 1.5rem;
//   height: 4rem;
//   background: var(--green);
//   color: var(--shape);
//   border-radius: 0.25rem;
//   border: 0;
//   font-size: 1rem;
//   margin-top: 1.5rem;
// }