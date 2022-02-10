import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 3rem;
  height: 100%; 
  ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 1rem;
  }
  margin-bottom: 1rem;

  & + div {
    border-left: 1px solid rgba(0,0,0,0.05);
  }

  @media(max-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 1rem;
    }

    
    & + div {
      border-left: 0;
      /* border-bottom: 1px solid rgba(0,0,0,0.05);  */
    }
  }

  header {
    height: 1.8rem;

    h2{
      font-weight: 500;
      font-size: 1rem;
      padding: 0 1rem;
    }
  }
`;
