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
  margin-bottom: 0.5rem;

  & + div {
    border-left: 1px solid rgba(0,0,0,0.05);
  }
  header {
    height: 2.8rem;
    h2{
      font-weight: 500;
      font-size: 1rem;
      padding: 0 0.5rem;
    }
  }
`;
