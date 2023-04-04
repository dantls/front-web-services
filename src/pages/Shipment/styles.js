import styled from 'styled-components';

export const Container = styled.div`
display: flex;
gap: 1rem;
align-items: baseline;
justify-content: center;
margin-top: 0.5rem;
`;

export const List= styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
`;

export const ListHeader = styled.h1`
  

`;
export const ListContent = styled.div`
  display: flex;
  flex-direction: column;
  background: lightblue;
  height: fit-content;
  min-height: 95vh;
  width: 16rem;
  padding: 1rem;
`;

export const Card = styled.div`
 position: relative;
 background: #FFF;
 border-radius: 0.5rem;
 margin-bottom: 0.75rem;
 padding:  0.25rem 0;
 box-shadow: 0 1px 4px 0 rgba(192,208,230, 0.8);
 border-top: 0.75rem solid ${(props) => props.active ? 'yellow' : 'black'};
 border-right: 0;
 border-bottom: 0;
 border-left: 0;
 cursor: move;
 
 text-align: center;

 header{
   position: absolute;
   top: -17px;
   left: 5px;
 }
 p {
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1.5rem;
 }

 h3 {
  font-size: 1.5rem;
 }

 &:hover{
   filter: brightness(0.9)
 }
`;