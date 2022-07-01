import styled from 'styled-components';
import {darken, transparentize} from 'polished';

export const Container = styled.form`
  
  h2{
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  input{
    display: block;
    width: 100%;
    padding: 0 0.7rem;
    height: 4rem;
    border-radius: 0.25rem;

    margin-bottom: 1.5rem;
    margin-top: 5px;

    border: 1px solid var(--input-border);
    background-color: var(--input-color);

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body)
    }

    & + input {
      margin-top: 20px;
    }
  }
  select{
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    margin-bottom: 2rem;

    border: 1px solid var(--input-border);
    background-color: var(--input-color);

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body)
    }

  }


  h1 {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }


  button[type="submit"]{
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: var(--shape);
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
  }

`;

export const TransactionTypeContainer = styled.div`
  margin: 0.5rem 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.2rem; 
`;


const colors = {
  green: '#33CC95',
  red: '#E52E4D',
  yellow: 'yellow',
  blue: 'blue'
}

export const OrderDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    border: 0;
  }
`;


export const RadioBox = styled.button`
  height: 3rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;
  background: ${(props)=> props.isActive 
    ? transparentize(0.8 , colors[props.activeColor])
    : 'transparent'
  };
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 20px;
    height: 20px;
  }
  transition: border-color 0.2s;
  &:hover {
    border-color: ${darken(0.1, '#d7d7d7' )}
  }
  span {
    display: inline-block;
    margin-left: 0.2rem;
    font-size: 1rem;
    color: var(--text-title);
  }
`;