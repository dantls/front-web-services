import React, { useState , useEffect} from 'react';
import {Container, Search, TableContainer, Header} from './styles';
import { Table } from '../../components/Table';
import api from '../../services/api';
// import {  Link } from 'react-router-dom';
// import { FiChevronLeft } from 'react-icons/fi';

export function Details() {

  const [listService, setListService] = useState([]);

  const [search, setSearch] = useState('');
  
  useEffect(() => {
    api.get(`/list-service/${search}`).then((response) => {
      setListService(response.data);
    });

  },[search]);


  return (
    <Container>
      <Header>
        <Search 
          type="search"
          placeholder="Buscar"
          value={search}
          onChange={(event) => {setSearch(event.target.value)}}
        />
        {/* <Link to="/">
              <FiChevronLeft size={16} />
              Voltar
        </Link> */}

      </Header>
      <TableContainer>
        <Table services={listService} />
        
      </TableContainer>
    </Container>
  );
}

