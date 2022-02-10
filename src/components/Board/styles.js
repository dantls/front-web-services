import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 1.3rem 0;
  height: calc(100vh - 5.5rem);

  @media(max-width: 700px){
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100% - 5.5rem);
  }

  
  /* @media(max-height: 1000px) and (max-width: 700px) {
    margin-top: 3rem;
  }
  @media(max-height: 950px) and (max-width: 700px) {
    margin-top: 4rem;
  }
  @media(max-height: 915px) and (max-width: 700px) {
    margin-top: 5rem;
  }
  @media(max-height: 896px) and (max-width: 700px) {
    margin-top: 6rem;
  }
  @media(max-height: 884px) and (max-width: 700px) {
    margin-top: 7rem;
  }
  @media(max-height: 800px) and (max-width: 700px) {
    margin-top: 10rem;
  }
  @media(max-height: 735px) and (max-width: 700px) {
    margin-top: 11rem;
  }
  @media(max-height: 760px) and (max-width: 700px) {
    margin-top: 12rem;
  }
  @media(max-height: 740px) and (max-width: 700px){
    margin-top: 11rem;
  }
  @media(max-height: 667px) and (max-width: 700px){
    margin-top: 12rem;
  }
   */
`;
