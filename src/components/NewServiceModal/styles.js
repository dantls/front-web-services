import styled from 'styled-components';


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

