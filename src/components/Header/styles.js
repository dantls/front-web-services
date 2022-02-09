import styled from 'styled-components';

export const Container = styled.div`
  height: 5.5rem;
  width: 100%;
  padding: 0 3rem;
  background: #FFFFFF;
  color: #fff;
  

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media(max-width: 700px) {
    width: 100%;
  }

  button {
          cursor: pointer;
          font-weight: 600;
          border-radius: 8px;
          border: 0;
          background: #39b100;
          color: #fff;

          display: flex;
          flex-direction: row;
          align-items: center;

          .text {
            padding: 16px 24px;
          }

          .icon {
            display: flex;
            padding: 16px 16px;
            background: #41c900;
            border-radius: 0 8px 8px 0;
            margin: 0 auto;
          }
    }
`;
