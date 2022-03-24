import styled from 'styled-components';

export const Container = styled.div`
  overflow-x: auto;

  table{
    width: 100%;
    border-spacing: 0 0.5rem;
   

    th{
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }
    td{
      height: 7rem;
      padding: 1rem 2rem;
      border:0;
      background-color: var(--shape);
      color: var(--text-body);
      border-radius: 0rem;

      &:first-child{
        border-radius: 0.25rem 0 0 0.25rem;
        color: var(--text-title);
        width: 4rem;
      }
      &:last-child{
        width: 12rem;
        height: 100%;
        border-radius: 0 0.25rem 0.25rem 0 ;
        color: var(--text-title);
      }
    }
  }


`;