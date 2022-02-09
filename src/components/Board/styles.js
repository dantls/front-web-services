import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 1.3rem 0;
  height: calc(100% - 5rem);

  @media(max-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* height: calc(100% - 5rem); */
  }



`;
