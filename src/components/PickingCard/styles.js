import styled from 'styled-components';

export const Container = styled.div`
 position: relative;
 min-width: 15rem;
 background: #FFF;
 border-radius: 0.5rem;
 margin-bottom: 0.8rem;
 margin-right: 0.5rem;
 padding: 0.85rem;
 box-shadow: 0 1px 4px 0 rgba(192,208,230, 0.8);
 border-top: 1rem solid rgba(230,236,245,0.4);
 border-right: 0;
 border-bottom: 0;
 border-left: 0;
 text-align: center;

 .data{
   font-size: 0.80rem;
 }

 header{
   position: absolute;
   top: -17px;
   left: 5px;
 }
 p {
  font-weight: 500;
  line-height: 1rem;
  margin-bottom: 0.5rem;
  margin-top: 0.35rem;
 }
 span{
  font-weight: 500;
  line-height: 1rem;
  font-size: 1.3rem;
 }

 &:hover{
   filter: brightness(0.9)
 }
`;
export const Label = styled.div`
 width: 0.6rem;
 height: 0.6rem;
 border-radius: 0.2rem;
 display: inline-block;
 background: ${(props) => props.color}
`;
export const Body = styled.div`
 border-radius: 0.2rem;
 background: ${(props) => props.color};
 margin: 0.35rem; 
 padding: 0.45rem 0;
`;

