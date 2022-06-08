import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 3rem;
  height: 100%; 
  ul {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: top;
      justify-content: center;
  }

  & + div {
    border-left: 1px solid rgba(0,0,0,0.05);
  }
  
`;
