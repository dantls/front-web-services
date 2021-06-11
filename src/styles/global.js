import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`

:root{
    --background: #f0f2f5;
    --shape: #FFFFFF;

    --text-title: #363F5F;
    --text-body: #969CB3;

    --blue: #5429CC;
    --blue-light: #6933FF;

    --green: #33CC95;

    --red: #E52E4D;

    --input-border: #D7D7D7;
    --input-color: #E7E9EE;

  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html, body, #root{
    height: 100vh;
  }

  

  body, input , textarea, button{
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    background: #ecf1f8;
    color: #333;
    -webkit-font-smoothing: antialiased !important;
  }

  ul{
    list-style: none;
  }

  html{
    @media(max-width: 1080px){
      font-size: 93.75%;
    }
    @media(max-width: 720px){
      font-size: 87.5%;
    }
  }

  .react-modal-overlay{
    background: rgba(0,0,0,0.5);
    position: fixed;

    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;

  }
  .react-modal-content{
    width:100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    border-radius: 0.24rem;
    
    position: relative;

  }
  .react-modal-close{
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    border: 0;
    background: transparent;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  } 
`;

